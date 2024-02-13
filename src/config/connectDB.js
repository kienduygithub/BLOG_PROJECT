import mysql from 'mysql2'
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE ? process.env.PASSWORD_DATABASE : null,
    database: process.env.DATABASE
})

export default connection