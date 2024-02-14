import ins from '../customize/axios'

export const getAllPosts = async (type) => {
    let response = null;
    console.log(type)
    if (!type) {
        response = await ins.get('/posts')
    } else {
        response = await ins.get(`/posts/?cat=${ type }`)
    }
    return response.data;
}

export const getSinglePost = async (postId) => {
    const response = await ins.get(`/posts/${ postId }`);
    return response.data;
}

export const handleDeletePost = async (postId) => {
    const response = await ins.delete(`/posts/${ postId }`);
    return response.data;
}

export const handleUploadFile = async (file) => {
    const response = await ins.post('/upload', file)
    return response.data;
}