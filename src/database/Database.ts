import { createConnection } from "typeorm";
import config from "../config/config";
import path from 'path'
class Database {
  public async getConnection(): Promise<void> {
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
        entities: [path.join(__dirname, "../entities/*.*")]
      });
      console.log("DB is connected", );
    } catch (e) {
      console.log("DB is not connected");
    }
  }
}

export default Database;
