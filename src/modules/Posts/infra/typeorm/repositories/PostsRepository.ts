import IPostsDto from '@modules/Posts/dtos/IPostsDto'
import IPostsRepository from '@modules/Posts/repositories/IPostsRepository'
import {getMongoRepository,MongoRepository, ObjectID} from 'typeorm'
import Posts from '../schemas/Posts'


export default class PostsRepositories implements IPostsRepository{
    private postsRepository:MongoRepository<Posts>

    constructor(){
        this.postsRepository = getMongoRepository(Posts,'mongo')
    }

    public async create({title,content,publication_date,owner}:IPostsDto):Promise<Posts>{
        const posts = this.postsRepository.create({title,content,publication_date,owner})
        await this.postsRepository.save(posts)
        return posts
    }

    public async findById(id:string):Promise<Posts | undefined>{
        const post = await this.postsRepository.findOne(id)
        return post
    }
    
    public async deleteById(id:ObjectID):Promise<Posts | undefined>{
        const post = await this.postsRepository.findOne(id)

        if(post){
            await this.postsRepository.delete({id:post.id})
        }
        return post
    }

    public async save(data:Posts):Promise<Posts>{
        return this.postsRepository.save(data)
    }

    public async findAll():Promise<Posts[]>{
        const posts = this.postsRepository.find()
        return posts
    }
    public async findAllUserPost(name:string):Promise<Posts[]>{
        const posts = this.postsRepository.find({
            owner:name
        })
        return posts
    }
}