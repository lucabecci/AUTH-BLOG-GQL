import { Field, ID, ObjectType } from "type-graphql";
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Entity,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("varchar", { length: 20 })
  title: string;

  @Field()
  @Column("varchar", { length: 15 })
  tophic: string;

  @Field()
  @Column("text")
  description: string;

  @Field(() => String)
  @CreateDateColumn({ type: "date" })
  created: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
