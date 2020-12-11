import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { RegisterInput } from "./utils-register/RegisterInput";
import bcrypt from 'bcryptjs'

import { User } from "../../entities/User";
@Resolver()
export class RegisterResolver {
  @Query(() => String, { name: "registerInstructions" })
  registerInstructions(): string {
    return "You need a valid email, a username where it need a min of 4 characteres and a password with min length of 6.";
  }

  @Mutation(() => User)
  async register(
      @Arg("data") 
      {firstName, lastName, email, username, password }: RegisterInput ): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await User.create({
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword
        })
        .save()

        return user;
  }
}
