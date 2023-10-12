import { connection } from "../dbConnection";
import { isValid } from "../utils/isValidText";
import { ControllerType } from "../Types";

export const RegisterController: ControllerType = async (req, res) => {
  try {
    const { name, email, password, isMale, habits } = req.body;

    if (!isValid([name, email, password]) || habits?.length <= 1) {
      throw new Error("Please enter a valid data")
    }

    

  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};

export const LoginController: ControllerType = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
