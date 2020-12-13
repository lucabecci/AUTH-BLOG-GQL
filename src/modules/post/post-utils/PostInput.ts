import { MaxLength, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class PostInput {
  @Field()
  @MaxLength(20)
  @MinLength(5)
  title: string;

  @Field()
  @MaxLength(15)
  @MinLength(1)
  tophic: string;

  @Field()
  @MinLength(20)
  description: string;
}
