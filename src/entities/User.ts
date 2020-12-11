import {Field, ID, ObjectType, Root} from 'type-graphql'
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity} from 'typeorm'

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column("varchar", {unique: true})
    username: string;

    @Field()
    @Column("text", {unique: true})
    email: string;

    @Column()
    password: string;

    @Field()
    say(@Root() parent: User): string {
        return `Hi ${parent.username}, welcome to my api gql`
    }
}


