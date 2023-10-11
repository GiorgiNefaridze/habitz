import { ControllerType } from "../Types";

export const RegisterController: ControllerType = async (req, res) => {
  try {
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
