import { Pool } from "pg";
import { config } from "dotenv";

config();

export const connection = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: Number(process.env.DB_PORT),
  host: process.env.HOST,
  database: process.env.DATABASE,
});
