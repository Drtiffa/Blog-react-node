import express from 'express'
import articleController from './articles.ctrl'

export const articleRouter = express.Router()

articleRouter.route('/')
  .post(articleController.create)
  .get(articleController.findAll)
articleRouter.route('/:id')
  .get(articleController.findOne)
  .put(articleController.update)
  .delete(articleController.delete)




