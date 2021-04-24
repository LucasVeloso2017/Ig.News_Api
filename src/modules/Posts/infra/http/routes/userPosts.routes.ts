import {Router} from 'express'
import UserPostsController from '../controllers/UserPostsController'
import ensureAuth from '@modules/Users/infra/http/middlewares/ensureAuth'

const userPostsController = new UserPostsController()
const postsRouter = Router()


postsRouter.use(ensureAuth)

postsRouter.get('/',userPostsController.index)

export default postsRouter