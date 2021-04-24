import IUsersDto from '@modules/Users/dtos/IUsersDto'
import IUsersRepository from '@modules/Users/repositories/IUsersRepository'
import {getMongoRepository,MongoRepository, ObjectID} from 'typeorm'
import Users from '../schemas/Users'


export default class UsersRepositories implements IUsersRepository{
    private usersRepository:MongoRepository<Users>

    constructor(){
        this.usersRepository = getMongoRepository(Users,'mongo')
    }

    public async create({name,email,password}:IUsersDto):Promise<Users>{
        const user = this.usersRepository.create({name,email,password})
        await this.usersRepository.save(user)
        return user
    }

    public async findById(id:string):Promise<Users | undefined>{
        const user = await this.usersRepository.findOne(id)
        return user
    }
    
    public async findByEmail(email:string):Promise<Users | undefined>{
        const user = await this.usersRepository.findOne({where:{email}})
        return user
    }

    public async deleteById(id:ObjectID):Promise<Users | undefined>{
        const user = await this.usersRepository.findOne(id)

        if(user){
            await this.usersRepository.delete({id:user.id})
        }
        return user
    }

    public async save(data:Users):Promise<Users>{
        return this.usersRepository.save(data)
    }
    
}