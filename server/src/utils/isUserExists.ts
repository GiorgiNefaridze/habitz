import { connection } from "../dbConnection";

type IsUserExistsType = (email: string) => Promise<boolean>;

export const isUserExists: IsUserExistsType = async (email) => {
  const {
    rows: [result],
  } = await connection.query(
    "SELECT EXISTS (SELECT * FROM users WHERE user_email = $1)",
    [email]
  );

  return result.exists;
};
