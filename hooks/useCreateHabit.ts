import { useMutation } from "react-query";
import { isAxiosError } from "axios";

import networkClient, { getRequestHeader } from "../network";
import { client } from "../QueryClientWrapper";

type HabitDto = {
  habit_layer: string;
  habit_name: string;
  habit_goal: string;
};

type ResponseType = {
  response: string;
};

const useCreateHabit = () => {
  const createHabit = async (habit) => {
    try {
      const habitDto: HabitDto = {
        habit_layer: habit.habitIcon,
        habit_name: habit.habitName,
        habit_goal: habit.goalInterval,
      };
      const {
        data: { response },
      } = await networkClient.post<ResponseType>("/api/habit", habitDto, {
        headers: await getRequestHeader(),
      });

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error?.response?.data.response);
      }
    }
  };

  return useMutation({
    mutationFn: createHabit,
    onSuccess: () => {
      return client.invalidateQueries({ queryKey: ["getHabits"] });
    },
  });
};

export { useCreateHabit };
