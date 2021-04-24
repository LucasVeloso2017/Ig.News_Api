import {inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import Users from '../infra/typeorm/schemas/Users';
import IHashProvider from '@shared/container/providers/hashProvider/models/IHashProvider';


interface Request{
    name:string
    email:string
    password:string
}

@injectable()
export default class CreatePostService{

    constructor(
        @inject('UsersRepository')
        private usersRepository:IUsersRepository,
        @inject("HashProvider")
        private hashProvider:IHashProvider,
    ){}


    public async execute({name,email,password}:Request): Promise<Users>{
        const checkUserExists = await this.usersRepository.findByEmail(email) 

        if(checkUserExists){
            throw new AppError('This email already exists')
        }

        const hashedPassword = await this.hashProvider.generateHash(password)

        const user = this.usersRepository.create({
            name,
            email,
            password:hashedPassword
        })

        return user
    }

}
