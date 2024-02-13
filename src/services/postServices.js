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