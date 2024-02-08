import React from "react";
import './Register.scss'
import {connect} from 'react-redux'
import { useNavigate } from "react-router";
const Register = () => {
    const navigate = useNavigate();
    const handleOnClickLogin = () => {
        navigate('/login')
    }
    return (
        <div className="register-container">
            <h1 className="title">Register</h1>
            <form>
                <input required type="text" placeholder="username" className="form-input"/>
                <input required type="email" placeholder="email" className="form-input" />
                <input required type="password" placeholder="password" className="form-input"/>
                <button className="form-button">Register</button>
                <p className="error-msg">This is an error!</p>
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