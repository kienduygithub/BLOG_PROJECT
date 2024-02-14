import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import initViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;

import multer from 'multer'
// const upload = multer({ dest: './uploads/' })

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/src/assets/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    res.status(200).json({
        status: 'OK',
        message: "Image has been uploaded.",
        data: file.filename
    })
})

// CONFIG
initViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
    console.log(`Welcome to http://localhost:${ port }`)
})