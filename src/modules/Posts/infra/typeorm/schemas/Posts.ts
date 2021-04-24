import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity('posts')
export default class Posts{

    @ObjectIdColumn()
    id:ObjectID

    @Column()
    title:string

    @Column()
    content:string

    @Column()
    publication_date:string

    @Column()
    owner:string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

}
