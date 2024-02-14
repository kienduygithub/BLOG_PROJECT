import React, { useEffect, useState } from "react";
import './Home.scss'
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import * as postServices from '../services/postServices'
const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { state } = location;
    const [ type, setType ] = useState('');
    // console.log('Check location: ', location)
    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    // ];
    const [ posts, setPosts ] = useState([]);
    const fetchAllPosts = async () => {
        const response = await postServices.getAllPosts(type);
        if (response && response.status === 'OK') {
            setPosts(response.data)
        } else if (response && response.status === 'ERR') {
            alert(response.message)
        }
    }
    useEffect(() => {
        fetchAllPosts()
    }, [type])
    useEffect(() => {
        if (state?.type) {
            setType(state?.type)
        }else{
            setType('')
        }
    }, [state])
    return (
        <div className="home-container">
            <div className="posts">
                {
                    posts && posts.length > 0 && posts.map((post) => {
                        return (
                            <div className="post" key={post.id}>
                                <div className="img">
                                    <img src={ post.img_post} alt="post"/>
                                </div>
                                <div className="content">
                                    <div onClick={() => navigate(`/post/${post.id}`, {state: post})}>
                                        <h1 className="content-title">{post.title}</h1>
                                    </div>
                                    <p className="content-desc">{ post.description }</p>
                                    <button className="content-button">Read more</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Home);