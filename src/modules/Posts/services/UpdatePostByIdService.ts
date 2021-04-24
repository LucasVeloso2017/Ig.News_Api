import { startOfHour,isBefore,getHours,format } from 'date-fns';
import {container, inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import Posts from '../infra/typeorm/schemas/Posts';
import IPostsRepository from '../repositories/IPostsRepository';
import moment from 'moment';
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';

interface Request{
    post_id:string
    title:string
    content:string
    user_id:string
}

@injectable()
export default class UpdatePostByIdService{

    constructor(
        @inject('PostsRepository')
        private postsRepository:IPostsRepository,
        @inject('UsersRepository')
        private usersRepository:IUsersRepository,
    ){}


    public async execute({post_id,title,content,user_id}:Request): Promise<Posts | undefined>{
        const checkPostExists = await this.postsRepository.findById(post_id)
        const checkOwnerExists = await this.usersRepository.findById(user_id)

        if(!checkPostExists){
            throw new AppError('This post not found',404)
        }

        if(!checkOwnerExists){
            throw new AppError('To update a post it is necessary to have authenticate',500)
        }

        checkPostExists.title = title
        checkPostExists.content = content
        checkPostExists.publication_date = moment().format('DD/MM/YYYY')
        checkPostExists.owner = checkOwnerExists.name

        const updatedPost = await this.postsRepository.save(checkPostExists)

        return updatedPost
    }

}
