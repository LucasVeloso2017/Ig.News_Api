import { compare } from 'bcryptjs'

import { sign } from 'jsonwebtoken'
import { inject,injectable } from 'tsyringe';
import AppError from '@shared/errors/appError'
import IHashProvider from '@shared/container/providers/hashProvider/models/IHashProvider'
import authConfig from '@config/config'
import Users from '../infra/typeorm/schemas/Users';
import IUsersRepository from '../repositories/IUsersRepository';

interface Request{
    email:string,
    password:string
}
interface Response{
    user:Users,
    token:string
}

@injectable()
export default class AuthenticateUserService{

    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository,
        
        @inject("HashProvider")
        private hashProvider:IHashProvider,
    ){}

    public async execute({email,password}:Request):Promise<Response>{
      
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new AppError('Incorrect Email/Password',401)
        }

        const passwordMacthed = await this.hashProvider.compareHash(password, user.password)

        if(!passwordMacthed){
            throw new AppError('Incorrect Email/Password',401)
        }
        
        user.password = ''

        const{ secret , expiresIn}=authConfig.jwt
       
        const token = sign({},secret,{
            subject:String(user.id),
            expiresIn
        })

        return { user,token }
    }   

}