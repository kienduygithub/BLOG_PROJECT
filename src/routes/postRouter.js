import express from 'express';
import postController from '../controllers/postController';

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.get('/', postController.getAllPosts)

router.get('/:id', postController.getSinglePost)

router.post('/', postController.addPost)

router.delete('/:id', postController.deletePost)

router.post('/:id', postController.updatePost)


module.exports = router