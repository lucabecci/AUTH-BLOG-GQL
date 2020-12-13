/* eslint-disable @typescript-eslint/no-explicit-any */
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import connectRedis from "connect-redis";
import session from "express-session";

import Database from "./database/Database";
import config from "./config/config";
import { redis } from "./redis/redis";
class Server {
  private _app: Application;
  private _database: Database;
  constructor() {
    this._app = express();
    this._database = new Database();

    this.dbInit();
    this.gqlInit(this._app);
    this.configInit();
  }

  private async dbInit(): Promise<void> {
    await this._database.getConnection();
  }

  private async gqlInit(app: Application): Promise<void> {
    const schema = await buildSchema({
      resolvers: [__dirname + "/modules/**/*.*"],
    });

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }: any) => ({ req, res }),
    });
    apolloServer.applyMiddleware({ app });
  }

  private async configInit() {
    const RedisStore = connectRedis(session);

    this._app.use(
      (_req, _res, next) => {
        next();
      },
      cors({
        credentials: true,
        origin: "http://localhost:3000",
      })
    );

    this._app.use(
      session({
        store: new RedisStore({
          client: redis as any,
        }),
        name: "qid",
        secret: config.TOKEN,
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: process.env.REDIS_SECURE === "production",
          maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
        },
      })
    );
  }

  public run(): void {
    this._app.listen(config.PORT, () => {
      console.log("Server on port", config.PORT);
    });
  }
}

export default Server;
