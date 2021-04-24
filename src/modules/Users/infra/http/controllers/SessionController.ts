import {container} from 'tsyringe'
import { Request,Response } from "express";
import  AuthenticateUserService  from '@modules/Users/services/AuthenticateUserService';

export default class SessionController {

    public async create(request:Request,response:Response){
        const{email,password}= request.body
 
        const authenticateUser = container.resolve(AuthenticateUserService)
            
        const { user, token } = await authenticateUser.execute({
            email,
            password
        })
        
        const formatedUser = {
            id:user.id,
            name:user.name,
            email:user.email,
            created_at:user.created_at,
            updated_at:user.updated_at
        }
        
        return response.json({ user:formatedUser,token })
    }

}