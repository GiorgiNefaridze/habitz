import { memo, useState, useRef, useEffect } from "react";
import { FlatList } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";

import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Close from "../../components/Close";
import { List } from "../../components/List";
import {
  colors,
  paddingHorizontal,
  emojiCollection,
  dateIntervals,
} from "../../CONSTANTS";
import { habits } from "../SignUp/data";
import { screenWidth } from "../SignUp/SignUp";
import { isValid } from "../../server/src/utils/isValidText";
import { NavigationType } from "../OnBoarding/Types";
import { useCreateHabit } from "../../hooks/useCreateHabit";

import {
  CreateHabitWrapper,
  HabitHeader,
  HabitBody,
  HabitEmojipickerWrapper,
  SelectIcon,
  BottomSheetContent,
} from "./CreateHabit.style";

const snapPoints = ["25%", "50%", "65%"];
const habitNames: string[] = habits.map(({ name }) => name);

const displayRandomHabitIcon = () => {
  const icons = emojiCollection.map(({ icon }) => icon);
  const index = Math.floor(Math.random() * icons.length);
  return icons[index];
};

const CreateHabit = memo(({ navigation: { goBack } }: NavigationType) => {
  const [habitName, setHabitName] = useState<string>("");
  const [goalInterval, setGoalInterval] = useState<string>("");
  const [habitIcon, setHabitIcon] = useState<string>(displayRandomHabitIcon());

  const { mutateAsync: Create, data, error } = useCreateHabit();
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetModalRef.current?.expand();
  };

  const handleClose = () => {
    bottomSheetModalRef.current?.close();
  };

  const handleCreate = async () => {
    if (!isValid([habitName, goalInterval, habitIcon])) {
      return;
    }
    const habitDto = { habitName, goalInterval, habitIcon };
    await Create(habitDto);
    setHabitName("");
    setGoalInterval("");
  };

  useEffect(() => {
    handleClose();
  }, [bottomSheetModalRef.current]);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message,
      });
    }

    if (data) {
      Toast.show({
        type: "success",
        text1: data,
      });
      setHabitIcon("");
      setHabitName("");
      setGoalInterval("");
    }
  }, [error, data]);

  return (
    <CreateHabitWrapper>
      <HabitHeader>
        <Button
          borderRadius={15}
          onPress={() => goBack()}
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
        <HabitEmojipickerWrapper onPress={handleOpen}>
          <SelectIcon>
            <Text
              color="black"
              fontSize={2}
              fontWeight={600}
              text={habitIcon}
            />
          </SelectIcon>
          <Text color="black" fontSize={4} fontWeight={600} text={habitName} />
        </HabitEmojipickerWrapper>
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
          onPress={handleCreate}
        >
          <Text
            color="white"
            fontSize={4}
            fontWeight={600}
            text="Create Habit"
          />
        </Button>
      </HabitBody>

      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Close label="Close" handleClose={handleClose} />
        <BottomSheetContent>
          <FlatList
            data={emojiCollection}
            renderItem={({ item: { icon } }) => (
              <SelectIcon isList onPress={() => setHabitIcon(icon)}>
                <Text color="black" fontSize={3} fontWeight={800} text={icon} />
              </SelectIcon>
            )}
            keyExtractor={(item) => item?.habit}
            numColumns={4}
          />
        </BottomSheetContent>
      </BottomSheet>
      <Toast />
    </CreateHabitWrapper>
  );
});

export default CreateHabit;
