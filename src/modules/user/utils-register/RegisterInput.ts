import { IsEmail, Length, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./EmailCheck";
import { isUsernameAlreadyExists } from "./UsernameCheck";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @Length(4, 15)
  @isUsernameAlreadyExists({ message: "Username is already used" })
  username: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email is already used" })
  email: string;

  @Field()
  @MinLength(6)
  password: string;
}
