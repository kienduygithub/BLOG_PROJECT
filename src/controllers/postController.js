import connection from '../config/connectDB'
import jwt from 'jsonwebtoken'
require('dotenv').config()

const getAllPosts = async (req, res) => {
    try {
        const category = req.query.cat;
        const query = category ? "SELECT *FROM posts WHERE category=?" : "SELECT * FROM posts";
        connection.query(query, [ category ], (err, data) => {
            if (err) return res.status(200).json({
                status: 'ERR',
                message: 'Got trouble: \n' + err
            })
            if (data && data.length >= 0) {
                return res.status(200).json({
                    status: 'OK',
                    message: 'GET POST SUCCESS',
                    data: data
                })
            }
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
const getSinglePost = async (req, res) => {
    try {
        const postId = +req.params.id;
        const query = "SELECT `username`, `title`, `description`, p.img_post, u.image AS userImg, `category`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id=?";
        connection.query(query, [ postId ], (err, data) => {
            if (err) return res.status(200).json({
                status: 'ERR',
                message: err
            })
            return res.status(200).json({
                status: 'OK',
                message: 'SINGLE POST INFO',
                data: data[ 0 ]
            })
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
const addPost = async (req, res) => {
    res.json("From controller")
}
const deletePost = async (req, res) => {
    try {
        const postId = +req.params.id;
        const token = req.cookies.access_token;

        if (!token) {
            return res.status(401).json({
                status: 'ERR',
                message: 'Not authentication!'
            })
        }
        jwt.verify(token, process.env.ACCESS_TOKEN, async (err, user) => {
            if (err) return res.status(401).json({
                status: 'ERR',
                message: 'Token is not valid!'
            })
            const query = "DELETE FROM posts WHERE `id`= ? AND `uid` = ?";
            connection.query(query, [ postId, user.id ], (err, data) => {
                if (err) return res.status(200).json({
                    status: 'ERR',
                    message: err
                })
                return res.status(200).json({
                    status: 'OK',
                    message: 'The post has been deleted!'
                })
            })
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
const updatePost = async (req, res) => {
    res.json("From controller")
}

module.exports = {
    getAllPosts: getAllPosts,
    getSinglePost: getSinglePost,
    addPost: addPost,
    deletePost: deletePost,
    updatePost: updatePost
}