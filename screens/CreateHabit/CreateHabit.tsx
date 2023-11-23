import { memo, useState, useRef, useCallback, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { List } from "./List";
import {
  colors,
  paddingHorizontal,
  colorsCollection,
  dateIntervals,
} from "../../CONSTANTS";
import { habits } from "../SignUp/data";
import { screenWidth } from "../SignUp/SignUp";
import { NavigationType } from "../OnBoarding/Types";
import { upperText } from "../../utils/upperText";

import {
  AddHabitWrapper,
  HabitHeader,
  HabitBody,
  ColorPickerWrapper,
  Color,
  ChooseColor,
  BottomSheetContent,
} from "./CreateHabit.style";

const snapPoints = ["25%", "50%"];
const habitNames: string[] = habits.map(({ name }) => name);

const CreateHabit = memo(({ navigation: { goBack } }: NavigationType) => {
  const [habitName, setHabitName] = useState<string>("");
  const [goalInterval, setGoalInterval] = useState<string>("");
  const [color, setColor] = useState<string>("blue"); //Default color

  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const handleBack = () => {
    goBack();
  };

  const handleOpen = useCallback(() => {
    bottomSheetModalRef.current?.expand();
  }, []);

  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleChooseColor = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    handleClose();
  }, [bottomSheetModalRef.current, handleClose]);

  return (
    <AddHabitWrapper>
      <HabitHeader>
        <Button
          borderRadius={15}
          onPress={handleBack}
          padding={12}
          backgroundColor="transparent"
          width={45}
          borderColor="grey"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Text
          color="black"
          fontSize={3}
          fontWeight={900}
          text="Create Custom Habit"
        />
      </HabitHeader>

      <HabitBody>
        <List
          data={habitNames}
          label="NAME"
          selectItem={setHabitName}
          value={habitName}
        />
        <ColorPickerWrapper onPress={handleOpen}>
          <Color color={color}></Color>
          <Text
            color="black"
            fontSize={4}
            fontWeight={600}
            text={upperText(color, 0)}
          />
        </ColorPickerWrapper>
        <List
          data={dateIntervals}
          label="GOAL"
          selectItem={setGoalInterval}
          value={goalInterval}
        />
        <Button
          backgroundColor={colors.primary}
          borderRadius={20}
          width={screenWidth - 2 * paddingHorizontal}
          padding={10}
          shadows
          onPress={() => {}}
        >
          <Text color="white" fontSize={4} fontWeight={600} text="Add Habit" />
        </Button>
      </HabitBody>

      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        style={{ display: "flex", alignItems: "center" }}
      >
        <TouchableOpacity
          style={{ position: "absolute", right: 10, top: 10 }}
          onPress={handleClose}
        >
          <Text color="black" fontSize={4} fontWeight={600} text="close" />
        </TouchableOpacity>
        <ChooseColor color={color} align></ChooseColor>
        <BottomSheetContent>
          <View>
            <FlatList
              data={colorsCollection}
              renderItem={({ item }: { item: string }) => (
                <ChooseColor
                  color={item}
                  onPress={() => handleChooseColor(item)}
                ></ChooseColor>
              )}
              keyExtractor={(item) => item}
              numColumns={4}
            />
          </View>
        </BottomSheetContent>
      </BottomSheet>
    </AddHabitWrapper>
  );
});

export default CreateHabit;
