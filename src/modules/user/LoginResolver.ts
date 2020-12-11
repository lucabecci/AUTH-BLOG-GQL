import { Resolver, Mutation, Arg, Ctx } from "type-graphql";

import bcrypt from 'bcryptjs'

import { User } from "../../entities/User";
import {LoginInput} from './utils-login/LoginInput'
import { MyContext } from "src/types/MyContext";
@Resolver()
export class LoginResolver {
  @Mutation(() => User, {name: 'login'})
  async login(
    @Arg("data") {email, password }: LoginInput,
    @Ctx() ctx: MyContext
    ): Promise<User | null> {
      const user = await User.findOne({where: {email}})
      if(!user){
        return null
      }  

      const valid = await bcrypt.compare(password, user.password)
      if(!valid){
        return null;
      }

      ctx.req.session.userId = user.id
      return user;
  }
}
