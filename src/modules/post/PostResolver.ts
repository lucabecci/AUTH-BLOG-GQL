import { MyContext } from "../../types/MyContext";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middlewares/Auth";
import { User } from "../../entities/User";
import { Post } from "../../entities/Post";
import { PostInput } from "./post-utils/PostInput";

@Resolver()
export class PostResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Post)
  async createPost(
    @Ctx() ctx: MyContext,
    @Arg("data") { title, tophic, description }: PostInput
  ): Promise<Post | string> {
    try {
      const userId: number = ctx.req.session.userId;
      const userPost = await User.findOne({ where: { id: userId } });

      const post: Post = await Post.create({
        title,
        tophic,
        description,
        user: userPost,
      }).save();
      console.log(post);
      return post;
    } catch (e) {
      console.log(e);
      return "error";
    }
  }

  @UseMiddleware(isAuth)
  @Query(() => [Post])
  async getPosts(@Ctx() ctx: MyContext): Promise<Post[]> {
    const userId: number = ctx.req.session.userId;
    const userPost = await User.findOne({ where: { id: userId } });

    const posts: Post[] = await Post.find({ where: { user: userPost } });

    return posts;
  }
}
