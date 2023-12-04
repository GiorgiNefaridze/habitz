import { useMutation } from "react-query";
import { isAxiosError } from "axios";

import networkClient from "../network";

export type RegisterDtoType = {
  name: string;
  email: string;
  password: string;
  isMale: boolean;
};

type ResponseType = {
  response: string;
};

const useRegister = () => {
  const register = async (registerDto: RegisterDtoType) => {
    try {
      const {
        data: { response },
      } = await networkClient.post<ResponseType>(
        "/api/user/register",
        registerDto
      );

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error?.response?.data.response);
      }
    }
  };

  return useMutation({
    mutationFn: register,
  });
};

export { useRegister };
