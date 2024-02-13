import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();

router.get('/', (req, res) => {
    return res.render('index')
})

module.exports = router;