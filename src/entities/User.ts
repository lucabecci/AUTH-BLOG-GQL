import { Field, ID, ObjectType, Root } from "type-graphql";
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity, OneToMany } from "typeorm";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column("varchar", { unique: true })
  username: string;

  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  say(@Root() parent: User): string {
    return `Hi ${parent.username}, welcome to my api gql`;
  }

  @OneToMany(() => Post, post => post.user)
  posts: Post[]
}
