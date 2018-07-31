import express from 'express'
import { articleRouter } from './ressources/articles'
import { userRoute } from './ressources/user'

export const restRouter = express.Router()

restRouter.use('/article', articleRouter)
restRouter.use('/user', userRoute);