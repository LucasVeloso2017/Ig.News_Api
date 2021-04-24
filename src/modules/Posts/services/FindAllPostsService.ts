import { startOfHour,isBefore,getHours,format } from 'date-fns';
import {container, inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import Posts from '../infra/typeorm/schemas/Posts';
import IPostsRepository from '../repositories/IPostsRepository';
import moment from 'moment';

@injectable()
export default class FindAllPostByIdService{

    constructor(
        @inject('PostsRepository')
        private postsRepository:IPostsRepository,
    ){}

    public async execute(): Promise<Posts[]>{
        const posts = await this.postsRepository.findAll()
        return posts
    }

}
