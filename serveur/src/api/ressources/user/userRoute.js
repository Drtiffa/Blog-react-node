import express from 'express'
//import passport from 'passport'
import userController from "./user.ctrl"

export const userRoute = express.Router()

userRoute.post('/signup',userController.signup)
userRoute.post('/login',userController.login)
userRoute.route('/')
    .get(userController.findAll)
userRoute.route('/:id')
    .get(userController.findOne)
    .put(userController.update)
    .delete(userController.delete)