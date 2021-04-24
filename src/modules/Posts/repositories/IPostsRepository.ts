import { ObjectID } from "typeorm";
import IPostsDto from "../dtos/IPostsDto";
import Posts from "../infra/typeorm/schemas/Posts";

export default interface IPostsRepository{
    findById(id:string):Promise<Posts | undefined>
    deleteById(id:ObjectID):Promise<Posts | undefined>
    create(data:IPostsDto):Promise<Posts>
    save(data:Posts):Promise<Posts>
    findAll():Promise<Posts[]>
    findAllUserPost(name:string):Promise<Posts[]>
}