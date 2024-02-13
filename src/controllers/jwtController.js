import jwt from 'jsonwebtoken'
require('dotenv').config()
export const generalAccessToken = async (payload) => {
    const access_token = await jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    return access_token;
}
export const generalRefreshToken = async (payload) => {
    const refresh_token = await jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '1d' });
    return refresh_token;
}