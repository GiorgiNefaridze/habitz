import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

type dataType = {
  id: number;
};

const generateJwt = (data: dataType): string | Buffer => {
  return jwt.sign(data, process.env.SECRET ?? "");
};

const verifyJwt = (token: string) => {
  return jwt.verify(token, process.env.SECRET ?? "");
};

export { generateJwt, verifyJwt };
