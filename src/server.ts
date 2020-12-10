import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { buildSchema } from "type-graphql";

import Database from "./database/Database";
import config from "./config/config";
class Server {
  private _app: Application;
  private _database: Database;
  constructor() {
    this._app = express();
    this._database = new Database();

    this.dbInit();
    this.gqlInit(this._app);
  }

  private async dbInit(): Promise<void> {
    await this._database.getConnection();
  }

  private async gqlInit(app: Application): Promise<void> {
    const schema = await buildSchema({
      resolvers: [__dirname + "/modules/**/*.ts"],
    });

    const apolloServer = new ApolloServer({
      schema,
    });

    apolloServer.applyMiddleware({ app });
  }

  public run(): void {
    this._app.listen(config.PORT, () => {
      console.log("Server on port", config.PORT);
    });
  }
}

export default Server;
