import { genSalt, hash, compare } from "bcrypt";
import { config } from "dotenv";

config();

type ComparePasswordType = (plainPwd: string, hash: string) => Promise<boolean>;

const hashPassword = async (plainPwd: string) => {
  const salt = await genSalt(Number(process.env.SALT));
  return hash(plainPwd, salt);
};

const comparePassword: ComparePasswordType = async (plainPwd, hash) => {
  return await compare(plainPwd, hash);
};

export { hashPassword, comparePassword };
