import React from "react";
import './Navbar.scss'
import { connect } from 'react-redux'
import logoBlog from '../assets/logo.png'
import { useNavigate } from 'react-router'
import { useLocation } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)
    const handleNavigateLink = (type) => {
        if (type === 'ART') {
            navigate('/?cat=art')
        } else if (type === 'SCIENCE') {
            navigate('/?cat=science')
        } else if (type === 'TECHNOLOGY') {
            navigate('/?cat=technology')
        } else if (type === 'CINEMA') {
            navigate('/?cat=cinema')
        } else if (type === 'DESIGN') {
            navigate('/?cat=design')
        } else if (type === 'FOOD') {
            navigate('/?cat=food')
        } else if (type === 'WRITE') {
            navigate('/write')
        }
    }
    return (
        <div className="navbar-background">
            <div className="navbar-container">
                <div className="logo">
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
                            <span>John</span>
                            <span title="Logout">Logout</span>
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

}) 
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)