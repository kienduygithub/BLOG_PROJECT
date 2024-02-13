import connection from '../config/connectDB'
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
    res.json("From controller")
}
const addPost = async (req, res) => {
    res.json("From controller")
}
const deletePost = async (req, res) => {
    res.json("From controller")
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