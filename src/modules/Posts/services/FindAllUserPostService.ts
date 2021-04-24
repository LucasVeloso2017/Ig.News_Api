import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import {container, inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import Posts from '../infra/typeorm/schemas/Posts';
import IPostsRepository from '../repositories/IPostsRepository';

interface Request{
    user_id:string
}

@injectable()
export default class FindAllUserPostService{

    constructor(
        @inject('PostsRepository')
        private postsRepository:IPostsRepository,

        @inject("UsersRepository")
        private usersRepository:IUsersRepository,
    ){}

    public async execute({user_id}:Request): Promise<Posts[]>{
        
        
        const user = await this.usersRepository.findById(user_id)
        if(!user){
            throw new AppError("user not found")
        }

        const posts = await this.postsRepository.findAllUserPost(user.name)
        return posts
    }

}
