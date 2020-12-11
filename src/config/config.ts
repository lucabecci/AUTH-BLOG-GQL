import dotenv from "dotenv";
dotenv.config();

export interface IConfig {
  DB: {
    NAME: string;
    URI: string;
    USER: string;
    PSW: string;
    PORT: number;
    HOST: string;
  };
  PORT: number;
  TOKEN: string;
}

export default {
  DB: {
    NAME: process.env.DB_NAME || "gql",
    URI: process.env.DB_URI || "",
    USER: process.env.DB_USER || "postgres",
    PSW: process.env.DB_PSW || "",
    PORT: 5432,
    HOST: process.env.DB_HOST || "localhost",
  },
  PORT: process.env.PORT || 3000,
  TOKEN: process.env.TOKEN || "secret",
};
