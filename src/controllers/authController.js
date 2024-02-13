import connection from '../config/connectDB'
import bcrypt from 'bcryptjs'
import * as jwtController from './jwtController'
const salt = bcrypt.genSaltSync(10)

export const register = async (req, res) => {
    try {
        res.cookie('cookieName', 'abc', {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        })
        console.log(req.cookies.cookieName)
        const { email, username, password } = req.body;
        if (!email || !username) {
            return res.status(404).json({
                status: 'ERR',
                message: 'Missing required parameters'
            })
        }
        const query = "SELECT * FROM users WHERE email = ? OR username = ?";
        (await connection).query(query, [ email, username ], async (err, data) => {
            if (err) return res.status(200).json({
                status: 'ERR',
                message: err
            })
            if (data.length) return res.status(200).json({
                status: 'ERR',
                message: 'User already exists'
            })
            const hashedPassword = bcrypt.hashSync(password.trim(), salt);

            const query_insert = 'INSERT INTO `users`(`username`, `email`, `password`) VALUES (?)';
            const values = [
                username.trim(), email.trim(), hashedPassword
            ];
            console.log(username, email, hashedPassword);
            (await connection).query(query_insert, [ values ], (err, data) => {
                if (err) return res.status(200).json({
                    status: 'ERR',
                    message: err
                })

                return res.status(200).json({
                    status: 'OK',
                    message: 'User has been created'
                })
            })

        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Missing required parameters'
            })
        }
        const query = "SELECT * FROM users WHERE username=?";
        const values = [
            username
        ]
        connection.query(query, [ values ], async (err, data) => {
            if (err) return res.status(200).json({
                status: 'ERR',
                message: err
            })
            if (data && data.length === 0) return res.status(200).json({
                status: 'ERR',
                message: 'User not found'
            })
            if (data && data.length > 0) {
                let user = data[ 0 ];
                let isCorrectPassword = bcrypt.compareSync(password.trim(), user.password);
                if (!isCorrectPassword) {
                    return res.status(404).json({
                        status: 'ERR',
                        message: 'Wrong username or password'
                    })
                } else {
                    const payload = {
                        id: user.id,
                        username: user.username
                    }
                    const access_token = await jwtController.generalAccessToken(payload)
                    const refresh_token = await jwtController.generalRefreshToken(payload)
                    res.cookie('access_token', access_token, {
                        httpOnly: true,
                        secure: false,
                        sameSite: 'strict'
                    })
                    res.cookie('refresh_token', refresh_token, {
                        httpOnly: true,
                        secure: false,
                        sameSite: 'strict'
                    })
                    const { password, ...rest } = user;
                    return res.json({
                        status: 'OK',
                        message: 'Login success',
                        data: {
                            ...rest, access_token: access_token
                        },
                    })
                }
            }
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        return res.status(200).json({
            status: 'OK',
            message: 'LOGOUT'
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
