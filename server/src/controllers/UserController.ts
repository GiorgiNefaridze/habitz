import { connection } from "../dbConnection";
import { isValid } from "../utils/isValidText";
import { isUserExists } from "../utils/isUserExists";
import { errorMessages, successMessages } from "../CONSTANTS";
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

    const {
      rows: [userCreated],
    } = await connection.query(
      "INSERT INTO users (user_name, email, password, habits, ismale) VALUES ($1,$2,$3,$4,$5) RETURNING email",
      [name, email, password, habits, isMale]
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

    const {rows: [userData]} = await connection.query("SELECT password FROM users WHERE email = $1", [email])
    

  
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
