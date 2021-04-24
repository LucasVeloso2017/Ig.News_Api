import {inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import Posts from '../infra/typeorm/schemas/Posts';
import IPostsRepository from '../repositories/IPostsRepository';
import moment from 'moment';
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';


interface Request{
    title:string
    content:string
    user_id:string
}

@injectable()
export default class CreatePostService{

    constructor(
        @inject('PostsRepository')
        private postsRepository:IPostsRepository,
        @inject('UsersRepository')
        private usersRepository:IUsersRepository,
    ){}


    public async execute({content,user_id,title}:Request): Promise<Posts>{
        
        const checkOwnerExists = await this.usersRepository.findById(user_id)

        if(!checkOwnerExists){
            throw new AppError('To create a post it is necessary to have a user',500)
        }

        const post = this.postsRepository.create({
            title,
            content,
            publication_date:moment().format('DD/MM/YYYY'),
            owner:checkOwnerExists.name
        })

        return post
    }

}
