import { genSalt, hash, compare } from "bcrypt";
import { config } from "dotenv";

config();

const hashPassword = async (plainPwd: string) => {
  const salt = await genSalt(Number(process.env.SALT));
  return hash(plainPwd, salt);
};

const comparePassword = async (plainPwd: string, hash: string): boolean => {
  return await compare(plainPwd, hash);
};

export { hashPassword, comparePassword };
