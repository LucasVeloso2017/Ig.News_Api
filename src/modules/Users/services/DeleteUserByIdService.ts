
import {inject,injectable} from 'tsyringe'
import AppError from '@shared/errors/appError'
import Users from '../infra/typeorm/schemas/Users';
import IUsersRepository from '../repositories/IUsersRepository';


interface Request{
    user_id:string
}

@injectable()
export default class DeleteUserByIdService{

    constructor(
        @inject('UsersRepository')
        private usersRepository:IUsersRepository,
    ){}


    public async execute({user_id}:Request): Promise<Users | undefined>{
        const checkUserExists = await this.usersRepository.findById(user_id)

        if(!checkUserExists){
            throw new AppError('This user not found',404)
        }

        const deletedUser = await this.usersRepository.deleteById(checkUserExists.id)

        return deletedUser
    }

}
