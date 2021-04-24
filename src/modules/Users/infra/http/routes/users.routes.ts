import {Router} from 'express'
import { celebrate,Segments,Joi } from 'celebrate'
import UsersController from '../controllers/UsersController'
import ensureAuth from '../middlewares/ensureAuth'

const usersController = new UsersController()
const usersRouter = Router()


usersRouter.post('/',usersController.create)

usersRouter.use(ensureAuth)
usersRouter.get('/:id',usersController.show)
usersRouter.put('/:id',usersController.update)
usersRouter.delete('/:id',usersController.destroy)


export default usersRouter