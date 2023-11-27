import { memo } from "react";
import { View, Image } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import Text from "../../../components/Text/Text";
import { dataType, habits } from "../../SignUp/data";
import { colors } from "../../../CONSTANTS";

import { HabitElement } from "./Habit.style";

type HabitType = {
  habit: string;
};

const Habit = memo(({ habit }: HabitType) => {
  console.log(habit.habit_color);

  // const { name, img } = habits?.find(({ name }) => name === habit) as dataType;

  return (
    <HabitElement>
      <AnimatedCircularProgress
        size={35}
        width={3}
        fill={60}
        tintColor={colors.primary}
        backgroundColor="#3d5875"
        children={() => {
          return (
            <Text
              color="black"
              fontSize={5}
              fontWeight={300}
              text={habit.habit_color}
              lineHeight={20}
            />
          );
        }}
      />
      <View>
        <Text
          color="black"
          fontSize={5}
          fontWeight={300}
          text="0/10000"
          lineHeight={20}
        />
      </View>
    </HabitElement>
  );
});

export default Habit;
