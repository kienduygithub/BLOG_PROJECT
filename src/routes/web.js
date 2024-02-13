import express from 'express';
import authRouter from './authRouter'
import userRouter from './userRouter'
import postRouter from './postRouter'
const configWebRoutes = (app) => {
    app.use('/api/auth', authRouter)
    app.use('/api/users', userRouter);
    app.use('/api/posts', postRouter);
}

export default configWebRoutes;