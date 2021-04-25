import FindAllUserPostService from '@modules/Posts/services/FindAllUserPostService';
import {container} from 'tsyringe'
import { Request,Response } from "express";


export default class UserPostsController {

    public async index(request:Request,response:Response){
        const user_id = request.user.id
        
        const allPost = container.resolve(FindAllUserPostService)

        const posts = await allPost.execute({user_id})
        
        response.setHeader('user-token',request.user.id)
        return response.json(posts)
    }
    
}