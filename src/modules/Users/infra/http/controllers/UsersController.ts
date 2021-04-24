import  CreateUserService  from '@modules/Users/services/CreateUserService';
import  DeleteUserByIdService  from '@modules/Users/services/DeleteUserByIdService';
import  FindUserByIdService  from '@modules/Users/services/FindUserByIdService';
import  UpdateUserByIdService  from '@modules/Users/services/UpdateUserByIdService';

import {container} from 'tsyringe'
import { Request,Response } from "express";


export default class UsersController {

    public async create(request:Request,response:Response){
        const{name,email,password}=request.body

        const createUser = container.resolve(CreateUserService)

        const user = await createUser.execute({
            name,email,password
        })

        return response.json(user)
    }

    public async show(request:Request,response:Response){
        const{id} = request.params

        const findUser = container.resolve(FindUserByIdService)

        const user = await findUser.execute({
            user_id:id
        })

        return response.json(user)
    }
    
    public async update(request:Request,response:Response){
        const{id} = request.params
        const{email,password,} = request.body

        const updateUser = container.resolve(UpdateUserByIdService)

        const user = await updateUser.execute({
            user_id:id,
            email,
            password,
        })

        return response.json(user)
    }

    public async destroy(request:Request,response:Response){
        const{id} = request.params

        const delteUser = container.resolve(DeleteUserByIdService)

        const user = await delteUser.execute({
            user_id:id
        })

        return response.json(user)
    }


}