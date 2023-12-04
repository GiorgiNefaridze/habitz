import { memo, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleHalfStroke, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import Text from "../../../components/Text/Text";
import { useDeleteHabit } from "../../../hooks/useDeleteHabit";
import { colors } from "../../../CONSTANTS";
import { upperText } from "../../../utils/upperText";
import { HabitType } from "../../../server/src/controllers/HabitController";

import { HabitElement, HabitElementContent } from "./Habit.style";

const Habit = memo(
  ({ habit_layer, habit_name, habit_goal, habit_id }: HabitType) => {
    const [isLongPressed, setIsLongPressed] = useState<boolean>(false);
    const [fill, setFill] = useState(0);

    const { mutateAsync: Delete } = useDeleteHabit();

    const handleDelete = async () => {
      if (!isLongPressed) {
        return;
      }

      await Delete(habit_id);
      setIsLongPressed(false);
    };

    return (
      <HabitElement
        isPressed={isLongPressed}
        onLongPress={() => setIsLongPressed((prev) => !prev)}
        onPress={handleDelete}
      >
        {isLongPressed ? (
          <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
            <FontAwesomeIcon icon={faTrash} color="white" size={16} />
          </TouchableOpacity>
        ) : (
          <>
            <HabitElementContent>
              <AnimatedCircularProgress
                size={35}
                width={3}
                fill={fill}
                tintColor={colors.primary}
                backgroundColor="#3d5875"
                children={() => {
                  return (
                    <Text
                      color="black"
                      fontSize={5}
                      fontWeight={300}
                      text={habit_layer}
                      lineHeight={20}
                    />
                  );
                }}
              />
              <View>
                <Text
                  color="black"
                  fontSize={4}
                  fontWeight={500}
                  text={upperText(habit_name, 0)}
                  lineHeight={20}
                />
                <Text
                  color="black"
                  fontSize={5}
                  fontWeight={300}
                  text={habit_goal}
                  lineHeight={20}
                />
              </View>
            </HabitElementContent>
            <View style={{ flexDirection: "row", columnGap: 10 }}>
              <TouchableOpacity onPress={() => setFill(50)}>
                <FontAwesomeIcon
                  icon={faCircleHalfStroke}
                  color={colors.primary}
                  size={19}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setFill(100)}>
                <FontAwesomeIcon
                  icon={faCircle}
                  color={colors.primary}
                  size={19}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </HabitElement>
    );
  }
);

export default Habit;
