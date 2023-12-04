import { useMutation } from "react-query";
import { isAxiosError } from "axios";

import { client } from "../QueryClientWrapper";
import networkClient from "../network";

type ResponseType = {
  response: string;
};

const useDeleteHabit = () => {
  const deleteHabit = async (habit_id: number) => {
    try {
      const {
        data: { response },
      } = await networkClient.delete<ResponseType>("/api/habit/" + habit_id);

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error?.response?.data.response);
      }
    }
  };

  return useMutation({
    mutationFn: deleteHabit,
    onSuccess: () => {
      return client.invalidateQueries({ queryKey: ["getHabits"] });
    },
  });
};

export { useDeleteHabit };
