import React from "react";
import './Login.scss'
import { connect } from 'react-redux'
import { useNavigate }from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const handleOnClickRegister = () => {
        navigate('/register')
    }
    return (
        <div className="login-container">
            <h1 className="title">Login</h1>
            <form>
                <input type="text" placeholder="username" className="form-input"/>
                <input type="password" placeholder="password" className="form-input"/>
                <button className="form-button">Login</button>
                <p className="error-msg">This is an error!</p>
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

})
export default connect(mapStateToProps, mapDispatchToProps)(Login);