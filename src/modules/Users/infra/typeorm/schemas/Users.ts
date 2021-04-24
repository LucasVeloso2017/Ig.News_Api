import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export default class Users{

    @ObjectIdColumn()
    id:ObjectID

    @Column()
    name:string

    @Column()
    email:string
    
    @Column()
    @Exclude()
    password:string


    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

}
