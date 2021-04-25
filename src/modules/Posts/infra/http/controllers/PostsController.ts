import CreatePostService from '@modules/Posts/services/CreatePostService';
import DeletePostByIdService from '@modules/Posts/services/DeletePostByIdService';
import FindAllPostsService from '@modules/Posts/services/FindAllPostsService';
import FindPostByIdService from '@modules/Posts/services/FindPostByIdService';
import UpdatePostByIdService from '@modules/Posts/services/UpdatePostByIdService';
import {container} from 'tsyringe'
import { Request,Response } from "express";


export default class PostsController {

    public async create(request:Request,response:Response){
        const user_id = request.user.id
        const{title,content}=request.body

        const createPost = container.resolve(CreatePostService)

        const post = await createPost.execute({
            title,
            content,
            user_id
        })

        response.setHeader('user-token',request.user.id)
        return response.json(post)
    }

    public async show(request:Request,response:Response){
        const{id}=request.params

        const findPost = container.resolve(FindPostByIdService)

        const post = await findPost.execute({
            post_id:id
        })

        response.setHeader('user-token',request.user.id)
        return response.json(post)
    }

    public async index(request:Request,response:Response){
        const allPost = container.resolve(FindAllPostsService)

        const posts = await allPost.execute()

        return response.json(posts)
    }
    
    public async update(request:Request,response:Response){
        const{id}=request.params
        const user_id = request.user.id
        const{title,content}=request.body

        const updatePost = container.resolve(UpdatePostByIdService)

        const post = await updatePost.execute({
            post_id:id,
            content,
            title,
            user_id
        })

        response.setHeader('user-token',request.user.id)
        return response.json(post)
    }

    public async destroy(request:Request,response:Response){
        const{id}=request.params

        const findPost = container.resolve(DeletePostByIdService)

        const post = await findPost.execute({
            post_id:id
        })

        response.setHeader('user-token',request.user.id)
        return response.json(post)
    }


}