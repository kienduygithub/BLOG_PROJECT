import React from "react";
import './Footer.scss'
import { connect } from 'react-redux'
import logoBlog from '../assets/logo.png'
const Footer = () => {
    return (
        <div className="footer-container">
            <img src={logoBlog} alt="logo-image" />
            <span>Made with ♥ <b>Kiến Duy</b></span>
        </div>
    )
}

const mapStateToProps = (state) => ({

}) 
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Footer)