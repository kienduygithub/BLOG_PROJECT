import React, { useState } from "react";
import './Register.scss'
import {connect} from 'react-redux'
import { useNavigate } from "react-router";
import * as authServices from '../services/authServices'
import {toast, ToastContainer} from 'react-toastify'
const Register = () => {
    const navigate = useNavigate();
    const handleOnClickLogin = () => {
        navigate('/login')
    }

    const [ inputs, setInputs ] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [errMessage, setErrMessage] = useState('')
    const handleOnChangeInput = (e, type) => {
        // const copyState = { ...inputs };
        // copyState[type] = e.target.value
        // setInputs({
        //     ...copyState
        // })
        setInputs({
            ...inputs,
            [type]: e.target.value
        })
    }
    const handleSubmit = async () => {
        const response = await authServices.handleRegister(inputs)
        if (response && response.status === 'OK') {
            alert(response.message)
            setInputs({
                username: '',
                email: '',
                password: ''
            })
            setErrMessage('')
            navigate('/login')
        } else if (response && response.status === 'ERR') {
            setInputs({
                ...inputs,
                password: ''
            })
            setErrMessage(response.message)
        }
    }
    return (
        <div className="register-container">
            <h1 className="title">Register</h1>
            <form>
                <input required type="text" onChange={(e) => handleOnChangeInput(e, 'username')} name="username" value={inputs.username}  placeholder="username" className="form-input"/>
                <input required type="email" placeholder="email" className="form-input" onChange={(e) => handleOnChangeInput(e, 'email')} value={inputs.email}/>
                <input required type="password" placeholder="password" className="form-input" onChange={(e) => handleOnChangeInput(e, 'password')} value={inputs.password}/>
                <button type="button" className="form-button" onClick={() => handleSubmit()}>Register</button>
                {
                    errMessage && errMessage.length > 0 &&
                    <p className="error-msg">{ errMessage }</p>
                }
                <span className="dont-have-account">
                    Do you have an account?
                    <span className="navigate-to-login" onClick={() => handleOnClickLogin()}>Sign in</span>
                </span>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Register);