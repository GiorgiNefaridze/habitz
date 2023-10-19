import { connection } from "../dbConnection";
import { isValid } from "../utils/isValidText";
import { isUserExists } from "../utils/isUserExists";
import { errorMessages, successMessages } from "../CONSTANTS";
import { hashPassword, comparePassword } from "../utils/securePassword";
import { generateJwt } from "../utils/jwt";
import { ControllerType } from "../Types";

export const RegisterController: ControllerType = async (req, res) => {
  try {
    const { name, email, password, isMale, habits } = req.body;

    if (
      !isValid([name, email, password]) ||
      habits?.length < 1 ||
      isMale === undefined
    ) {
      throw new Error(errorMessages.invaliCredentials);
    }

    const userExists = await isUserExists(email);

    if (userExists) {
      throw new Error(errorMessages.userExists);
    }

    const hashedPassword = await hashPassword(password);

    const {
      rows: [userCreated],
    } = await connection.query(
      "INSERT INTO users (user_name, email, password, habits, ismale) VALUES ($1,$2,$3,$4,$5) RETURNING email",
      [name, email, hashedPassword, habits, isMale]
    );

    if (Object.keys(userCreated)?.length) {
      res.status(201).json({ response: successMessages.userCreated });
    } else {
      res.status(500).json({ response: errorMessages.internalError });
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};

export const LoginController: ControllerType = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isValid([email, password])) {
      throw new Error(errorMessages.invaliCredentials);
    }

    const userExists = await isUserExists(email);

    if (!userExists) {
      throw new Error(errorMessages.userNotExists);
    }

    const {
      rows: [userData],
    } = await connection.query(
      "SELECT user_id,password,name FROM users WHERE email = $1",
      [email]
    );

    if (!(await comparePassword(password, userData.password))) {
      throw new Error(errorMessages.userNotExists);
    }

    const token = generateJwt({ id: userData?.user_id });

    res.status(200).json({ name: userData?.name, token });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
