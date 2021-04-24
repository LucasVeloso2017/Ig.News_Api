import { ObjectID } from "typeorm";
import IUsersDto from "../dtos/IUsersDto";
import Users from "../infra/typeorm/schemas/Users";

export default interface IUsersRepository{
    findById(id:string):Promise<Users | undefined>
    findByEmail(email:string):Promise<Users | undefined>
    deleteById(id:ObjectID):Promise<Users | undefined>
    create(data:IUsersDto):Promise<Users>
    save(data:Users):Promise<Users>
}