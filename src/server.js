import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import initViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())


// CONFIG
initViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
    console.log(`Welcome to http://localhost:${ port }`)
})