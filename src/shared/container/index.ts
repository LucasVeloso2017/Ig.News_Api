import './providers'
import { container } from 'tsyringe'


import IPostsRepository from '@modules/Posts/repositories/IPostsRepository'
import PostsRepository from '@modules/Posts/infra/typeorm/repositories/PostsRepository'

import IUsersRepository from '@modules/Users/repositories/IUsersRepository'
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository'


container.registerSingleton<IPostsRepository>('PostsRepository',PostsRepository)
container.registerSingleton<IUsersRepository>('UsersRepository',UsersRepository)