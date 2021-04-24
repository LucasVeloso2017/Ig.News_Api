import { Router } from 'express';
import PostsRouter from '@modules/Posts/infra/http/routes/posts.routes'
import UserPostsRouter from '@modules/Posts/infra/http/routes/userPosts.routes'
import UsersRouter from '@modules/Users/infra/http/routes/users.routes'
import AuthRouter from '@modules/Users/infra/http/routes/auth.routes'


const routes = Router()
routes.use('/posts',PostsRouter)
routes.use('/users',UsersRouter)
routes.use('/auth',AuthRouter)
routes.use('/userPost',UserPostsRouter)
export default routes