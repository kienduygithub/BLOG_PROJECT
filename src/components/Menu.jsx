import React, { useEffect, useState } from "react";
import './Menu.scss';
import { connect } from 'react-redux'
import * as postServices from '../services/postServices'
const Menu = (props) => {
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
    const fetchPostRecommends = async () => {
        const response = await postServices.getAllPosts(props.category);
        if (response && response.status === 'OK') {
            setPosts(response.data)
        } else if (response && response.status === 'ERR') {
            alert(response?.message)
        }
    }
    useEffect(() => {
        fetchPostRecommends()
    }, [props.category])
    return (
        <div className="menu-container">
            <h1>Other post you may like</h1>
            <div className="posts">
                {
                    posts.map(post => (
                        <div className="post" key={post.id}>
                            <img src={post.img_post} alt="post" />
                            <div className="post-content">
                                <h2>{post.title}</h2>
                                <button>Read more</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Menu)