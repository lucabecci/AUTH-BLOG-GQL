import {IsEmail, MinLength} from 'class-validator'
import { Field, InputType } from 'type-graphql';
import { UserDoesntExists } from './UserDoesntExists';


@InputType()
export class LoginInput {
    @Field()
    @IsEmail()
    @UserDoesntExists({message: "Email doesn't exists"})
    email:string;

    @Field()
    @MinLength(6)
    password: string;
}
