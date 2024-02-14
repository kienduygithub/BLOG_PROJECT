import React, { useEffect, useState } from "react";
import './Single.scss';
import editImage from '../assets/edit.png';
import deleteImage from '../assets/delete.png';
import {connect} from 'react-redux'
import { useLocation, useNavigate } from "react-router";
import * as actions from '../store/actions'
import * as postServices from '../services/postServices'
import Menu from "../components/Menu";
import moment from 'moment'
const Single = (props) => {
    const [ post, setPost ] = useState({});
    const currentUser = props.user;
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigateEdit = (post) => {
        navigate(`/write?edit=${post.id}`, {state: post})
    }
    const fetchSinglePostData = async () => {
        const postId = location.state.id;
        if (postId) {
            const response = await postServices.getSinglePost(postId);
            if (response && response.status === 'OK') {
                setPost(response.data)
            } else if (response && response.status === 'ERR') {
                alert(`Got trouble: ${response.message}`)
            }
        }
    }
    const handleDeleteSinglePost = async (postId) => {
        const response = await postServices.handleDeletePost(postId);
        if (response && response.status === 'OK') {
            alert(response.message)
            navigate('/')
        } else if (response && response.status === 'ERR') {
            alert(response.message)
        }
    }
    useEffect(() => {
        fetchSinglePostData();
    }, []);
    useEffect(() => {
        fetchSinglePostData();
    }, [location.state.id])
    return (
        <div className="single-container">
            <div className="single-content">
                <img src={post?.img_post} alt={ 'post' } />
                <div className="content-user">
                    {
                        post?.userImg &&
                            <img src={post?.userImg} alt={ 'user' } />
                    }
                    <div className="user-info">
                        <span className="user-name">{ post?.username}</span>
                        <p className="time-posted">Posted { moment(post.date).fromNow() }</p>
                    </div>
                    <div className="user-action">
                        {
                            currentUser.username === post.username && 
                            <>
                                <div className="action edit-action" onClick={() => handleNavigateEdit({id: post.id})}>
                                    <img src={ editImage } alt="edit"/>
                                </div>
                                <div className="action delete-action" onClick={() => handleDeleteSinglePost(post.id)}>
                                    <img src={ deleteImage } alt="delete"/>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <h1 className="title-post">
                    {post.title}
                </h1>
                <p className="content-post">
                    {post.description}
                </p>
            </div>
            <div className="single-menu">
                <Menu category={ post?.category } />
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