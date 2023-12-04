import { isAxiosError } from "axios";
import { useMutation } from "react-query";

import networkClient from "../network";
import { UserContext } from "../contexts/userContext";

type LoginType = {
  email: string;
  password: string;
};

type ResponseType = {
  name: string;
  token: string;
};

const useLogin = () => {
  const { dispatch } = UserContext();
  const login = async (data: LoginType) => {
    const loginDto = {
      email: data.email,
      password: data.password,
    };

    try {
      const {
        data: { name, token },
      } = await networkClient.post<ResponseType>("/api/user/login", loginDto);
      dispatch({ type: "LOGIN", payload: { token } });

      return { name, token };
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error?.response?.data.response);
      }
    }
  };

  return useMutation({
    mutationFn: login,
  });
};

export { useLogin };
