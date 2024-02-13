import React, { useState } from "react";
import './Login.scss'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as authServices from '../services/authServices'
import * as actions from '../store/actions'
const Login = (props) => {
    const navigate = useNavigate();
    const [ inputs, setInputs ] = useState({
        username: '',
        password: '',
        errMessage: ''
    })
    const handleOnClickRegister = () => {
        navigate('/register')
    }
    const handleOnChangeInputs = (e, type) => {
        setInputs({
            ...inputs,
            [type]: e.target.value
        })
    }
    const handleSubmit = async () => {
        const response = await authServices.handleLogin(inputs)
        console.log('>>> Check response api: ', response);
        if (response && response.status === 'OK') {
            setInputs({
                ...inputs,
                username: '',
                password: ''
            })
            props.saveUserInfoLoginSuccess(response.data)
            navigate('/', {state: 'Login success'})
        } else if (response && response.status === 'ERR') {
            setInputs({
                ...inputs,
                errMessage: response.message
            })
        }
    }
    return (
        <div className="login-container">
            <h1 className="title">Login</h1>
            <form>
                <input type="text" placeholder="username" className="form-input" onChange={(e) => handleOnChangeInputs(e, 'username')} value={inputs.username}/>
                <input type="password" placeholder="password" className="form-input" onChange={(e) => handleOnChangeInputs(e, 'password')} value={inputs.password}/>
                <button type="button" className="form-button" onClick={() => handleSubmit()}>Login</button>
                {
                    inputs.errMessage && inputs.errMessage > 0 &&
                        <p className="error-msg">{ inputs.errMessage }</p>
                }
                <span className="dont-have-account">
                    Don't you have an account?
                    <span className="navigate-to-register" onClick={() => handleOnClickRegister()}>Sign up</span>
                </span>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    saveUserInfoLoginSuccess: (data) => dispatch(actions.saveUserDataLoginSuccess(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);