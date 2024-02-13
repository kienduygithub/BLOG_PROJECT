import React, { useEffect, useState } from "react";
import './Navbar.scss'
import { connect } from 'react-redux'
import logoBlog from '../assets/logo.png'
import { useNavigate } from 'react-router'
import { useLocation } from "react-router-dom";
import * as authServices from '../services/authServices'
import * as actions from '../store/actions'
const Navbar = (props) => {
    const navigate = useNavigate();
    const location = useLocation()
    const [ user, setUser ] = useState({
        username: '',
        email: ''
    })
    const handleNavigateLink = (type) => {
        if (type === 'ART') {
            navigate('/?cat=art', {state: {type: 'art'}})
        } else if (type === 'SCIENCE') {
            navigate('/?cat=science', {state: {type: 'science'}})
        } else if (type === 'TECHNOLOGY') {
            navigate('/?cat=technology', {state: {type: 'technology'}})
        } else if (type === 'CINEMA') {
            navigate('/?cat=cinema', {state: {type: 'cinema'}})
        } else if (type === 'DESIGN') {
            navigate('/?cat=design', {state: {type: 'design'}})
        } else if (type === 'FOOD') {
            navigate('/?cat=food', {state: {type: 'food'}})
        } else if (type === 'WRITE') {
            navigate('/write')
        }
    }
    const handleLogout = async () => {
        const response = await authServices.handleLogout();
        if (response && response.status === 'OK') {
            props.resetUserInfo();
        }
    }
    useEffect(() => {
        if (props.user) {
            setUser(props.user)
        }
    }, [props.user])
    return (
        <div className="navbar-background">
            <div className="navbar-container">
                <div className="logo" onClick={() => navigate('/', {state: {type: ''}})}>
                    <img src={ logoBlog } alt="logo-image"/>
                </div>
                <div className="navbar-menu">
                    <div className={ location.search === '?cat=art' ? 'menu-child active' : "menu-child" } onClick={() => handleNavigateLink('ART')}>
                        <h6>ART</h6>
                    </div>
                    <div className={ location.search === '?cat=science' ? 'menu-child active' : "menu-child" } onClick={() => handleNavigateLink('SCIENCE')}>
                        <h6>SCIENCE</h6>
                    </div>
                    <div className={ location.search === '?cat=technology' ? 'menu-child active' : "menu-child" }  onClick={() => handleNavigateLink('TECHNOLOGY')}>
                        <h6>TECHNOLOGY</h6>
                    </div>
                    <div className={ location.search === '?cat=cinema' ? 'menu-child active' : "menu-child" } onClick={() => handleNavigateLink('CINEMA')}>
                        <h6>CINEMA</h6>
                    </div>
                    <div className={ location.search === '?cat=design' ? 'menu-child active' : "menu-child" }  onClick={() => handleNavigateLink('DESIGN')}>
                        <h6>DESIGN</h6>
                    </div>
                    <div className={ location.search === '?cat=food' ? 'menu-child active' : "menu-child" } onClick={() => handleNavigateLink('FOOD')}>
                        <h6>FOOD</h6>
                    </div>
                    <div className="menu-child-info">
                        <div className="infor-and-logout">
                            {
                                user.username ? 
                                    <>
                                        <span>{user.username}</span>
                                        <span onClick={() => handleLogout()} title="Logout">Logout</span>
                                    </>
                                    :
                                    <span onClick={() => navigate('/login')}>Login</span>
                                    
                            }
                        </div>
                        <span className="write" onClick={() => handleNavigateLink('WRITE')}>
                            WRITE
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
}) 
const mapDispatchToProps = (dispatch) => ({
    resetUserInfo: () => dispatch(actions.resetUserInfoSuccess())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)