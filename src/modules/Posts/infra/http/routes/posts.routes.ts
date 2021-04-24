import {Router} from 'express'
import { celebrate,Segments,Joi } from 'celebrate'
import PostsController from '../controllers/PostsController'
import UserPostsController from '../controllers/UserPostsController'
import ensureAuth from '@modules/Users/infra/http/middlewares/ensureAuth'

const postsController = new PostsController()
const postsRouter = Router()


postsRouter.get('/',postsController.index)

postsRouter.use(ensureAuth)

postsRouter.post('/',postsController.create)
postsRouter.get('/:id',postsController.show)
postsRouter.get('/',postsController.index)
postsRouter.put('/:id',postsController.update)
postsRouter.delete('/:id',postsController.destroy)

export default postsRouter