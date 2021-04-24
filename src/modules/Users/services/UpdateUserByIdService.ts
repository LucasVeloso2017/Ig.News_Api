import {container, inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import Users from '../infra/typeorm/schemas/Users';

interface Request{
    user_id:string
    email:string
    password:string
}

@injectable()
export default class UpdateUserByIdService{

    constructor(
        @inject('UsersRepository')
        private usersRepository:IUsersRepository,
    ){}


    public async execute({email,password,user_id}:Request): Promise<Users | undefined>{
        const checkOwnerExists = await this.usersRepository.findById(user_id)

        if(!checkOwnerExists){
            throw new AppError('User not found',404)
        }

        checkOwnerExists.email = email
        checkOwnerExists.password = password

        const updatedUser = await this.usersRepository.save(checkOwnerExists)

        return updatedUser

    }

}
