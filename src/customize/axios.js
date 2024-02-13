import axios from 'axios'

const ins = axios.create({
    baseURL: `${ process.env.REACT_APP_SERVER_URL }/api`,
    withCredentials: true
})

ins.interceptors.request.use((config) => {

    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error)
})

ins.interceptors.response.use((response) => {
    console.log('>>> Check response axios: ', response)
    return response;
}, (error) => {
    return Promise.reject(error)
})
export default ins;