import { IncomingHttpHeaders } from "http";

import { connection } from "../dbConnection";
import { verifyJwt } from "./jwt";

type User = {
  user_name: string;
  user_email: string;
  ismale: boolean;
  user_id: number;
};
type GetUserDataType = (header: IncomingHttpHeaders) => Promise<User>;

const getUserData: GetUserDataType = async (header) => {
  if (!header) {
    return;
  }
  const token = header["authorization"]?.split(" ")[1];
  const { id } = verifyJwt(token ?? "") as { id: string };

  const {
    rows: [user],
  } = await connection.query(
    "SELECT user_name,user_email,ismale,user_id FROM users WHERE user_id = $1",
    [id]
  );

  return user;
};

export { getUserData };
