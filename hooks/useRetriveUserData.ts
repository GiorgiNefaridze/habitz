import { isAxiosError } from "axios";
import { useQuery } from "react-query";

import networkClient, { getRequestHeader } from "../network";

export type UserDataType = {
  user_name: string;
};

type ResponseType = {
  response: UserDataType;
};

const useRetriveUserData = () => {
  const retriveUserData = async () => {
    try {
      const {
        data: { response },
      } = await networkClient.get<ResponseType>("/api/user", {
        headers: await getRequestHeader(),
      });

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error?.response?.data.response);
      }
    }
  };

  return useQuery({
    queryKey: ["retriveUserData"],
    queryFn: retriveUserData,
  });
};

export { useRetriveUserData };
