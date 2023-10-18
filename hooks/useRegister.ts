import { BaseUrl } from "../api/ApiBaseUrl";

type RegisterDataType = {
  name: string;
  email: string;
  password: string;
  isMale: boolean;
  habits: string[];
};

const useRegister = () => {
  const register = async (data: RegisterDataType) => {
    const registerDto = {
      name: data.name,
      email: data.email,
      password: data.password,
      isMale: data.isMale,
      habits: data.habits,
    };

    try {
      const {
        data: { response },
      } = await BaseUrl().post("/api/user/register", registerDto);

      return { response };
    } catch (error) {
      console.warn(error.message);
    }
  };

  return { register };
};

export { useRegister };
