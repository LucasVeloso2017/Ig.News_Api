import {inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import Posts from '../infra/typeorm/schemas/Posts';
import IPostsRepository from '../repositories/IPostsRepository';


interface Request{
    post_id:string
}

@injectable()
export default class FindPostByIdService{

    constructor(
        @inject('PostsRepository')
        private postsRepository:IPostsRepository,
    ){}


    public async execute({post_id}:Request): Promise<Posts | undefined>{
        const checkPostExists = await this.postsRepository.findById(post_id)

        if(!checkPostExists){
            throw new AppError('This post not found',404)
        }

        return checkPostExists
    }

}
