import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

type DataType = (data: { id: number }) => string;

const generateJwt: DataType = (data): string => {
  return jwt.sign(data, process.env.SECRET ?? "");
};

const verifyJwt = (token: string) => {
  return jwt.verify(token, process.env.SECRET ?? "");
};

export { generateJwt, verifyJwt };
