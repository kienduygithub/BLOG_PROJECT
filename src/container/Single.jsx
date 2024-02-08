import React, { useEffect, useState } from "react";
import './Single.scss';
import editImage from '../assets/edit.png';
import deleteImage from '../assets/delete.png';
import {connect} from 'react-redux'
import { useLocation, useNavigate } from "react-router";
import * as actions from '../store/actions'
import Menu from "../components/Menu";
const Single = (props) => {
    // const [ post, setPost ] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigateEdit = (post) => {
        navigate(`/write?edit=${post.id}`, {state: post})
    }
    const fetchSinglePostData = () => {
        const postId = location.state.id;
        props.saveUserDataLoginSuccess({username: 'Kiến Duy Vip'})
        console.log(props.user)
        if (postId) {
            // API
        }
    }
    useEffect(() => {
        fetchSinglePostData();
    }, [ location.state.id ])
    useEffect(() => {
        console.log(props.user)
    }, [props.user])
    return (
        <div className="single-container">
            <div className="single-content">
                <img src={"https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={ 'post' } />
                <div className="content-user">
                    <img src={"https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={ 'user' } />
                    <div className="user-info">
                        <span className="user-name">John</span>
                        <p className="time-posted">Posted 2 days ago</p>
                    </div>
                    <div className="user-action">
                        <div className="action edit-action" onClick={() => handleNavigateEdit({id: 1})}>
                            <img src={ editImage } alt="edit"/>
                        </div>
                        <div className="action delete-action">
                            <img src={ deleteImage } alt="delete"/>
                        </div>
                    </div>
                </div>
                <h1 className="title-post">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h1>
                <p className="content-post">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iste repudiandae temporibus vero, iusto ad quidem tempora nulla possimus voluptate nostrum quia eius voluptas explicabo aliquid iure rerum doloremque saepe.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iste repudiandae temporibus vero, iusto ad quidem tempora nulla possimus voluptate nostrum quia eius voluptas explicabo aliquid iure rerum doloremque saepe.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit iste repudiandae temporibus vero, iusto ad quidem tempora nulla possimus voluptate nostrum quia eius voluptas explicabo aliquid iure rerum doloremque saepe.
                </p>
            </div>
            <div className="single-menu">
                <Menu/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    saveUserDataLoginSuccess: (data) => dispatch(actions.saveUserDataLoginSuccess(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Single);