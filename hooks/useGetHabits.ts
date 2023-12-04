import { isAxiosError } from "axios";
import { useQuery } from "react-query";

import networkClient, { getRequestHeader } from "../network";
import { HabitType } from "../server/src/controllers/HabitController";

type ResponseType = {
  response: HabitType[];
};

const useGetHabits = () => {
  const getHabits = async () => {
    try {
      const {
        data: { response },
      } = await networkClient.get<ResponseType>("/api/habit", {
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
    queryKey: ["getHabits"],
    queryFn: getHabits,
  });
};

export { useGetHabits };
