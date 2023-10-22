import { useState } from "react";

import { UserContext } from "../contexts/userContext";
import { BaseUrl } from "../api/ApiBaseUrl";

type LoginDataType = {
  email: string;
  password: string;
};

const useLogin = () => {
  const [error, setError] = useState("");

  const { dispatch } = UserContext();

  const login = async (data: LoginDataType) => {
    const loginDto = {
      email: data.email,
      password: data.password,
    };

    try {
      const {
        data: { name, token },
      } = await BaseUrl().post("/api/user/login", loginDto);

      dispatch({ type: "LOGIN", payload: { name, token } });
      return { name, token };
    } catch (error) {
      setError(error.response.data.response);
    }
  };

  return { login, error, setError };
};

export { useLogin };
