import { connection } from "../dbConnection";

type isUserExistsType = {
  (email: string): Promise<boolean>;
};

export const isUserExists: isUserExistsType = async (email) => {
  const {
    rows: [result],
  } = await connection.query(
    "SELECT EXISTS (SELECT * FROM users WHERE email = $1)",
    [email]
  );

  return result.exists;
};
