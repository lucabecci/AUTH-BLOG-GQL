import { createConnection } from "typeorm";
import config from "../config/config";
import path from "path";
class Database {
  public async getConnection(): Promise<void> {
    let retries = 5;
    while(retries){
      try {
        await createConnection({
          type: "postgres",
          host: config.DB.HOST,
          port: config.DB.PORT,
          username: config.DB.USER,
          password: config.DB.PSW,
          database: config.DB.NAME,
          synchronize: true,
          logging: true,
          entities: [path.join(__dirname, "../entities/*.*")],
        });
        console.log("DB is connected");
        break;
      } catch (e) {
        console.log(e);
        retries -= 1
        console.log('retries:', retries)
        //wait 5 seconds
        await new Promise(res => setTimeout(res, 5000))
      }
    }
  }
}

export default Database;
