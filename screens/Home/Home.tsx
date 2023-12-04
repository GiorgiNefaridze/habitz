import { useEffect, memo, FC, useState } from "react";
import { View, FlatList, Platform } from "react-native";
import Toast from "react-native-toast-message";

import Habit from "./Habit/Habit";
import Text from "../../components/Text/Text";
import Calendar from "./Calendar/Calendar";
import { NavigationType } from "../OnBoarding/Types";
import {
  useRetriveUserData,
  UserDataType,
} from "../../hooks/useRetriveUserData";
import { useGetHabits } from "../../hooks/useGetHabits";
import { upperText } from "../../utils/upperText";
import { getDays } from "../../utils/dateRecognizer";
import { HabitType } from "../../server/src/controllers/HabitController";
import { paddingHorizontal } from "../../CONSTANTS";

import {
  HomeWrapper,
  HomeHeader,
  HabitEmoji,
  HabitsWrapper,
} from "./Home.style";

const Home: FC<NavigationType> = memo(() => {
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType);

  const { data: UserData, error } = useRetriveUserData();
  const { data: HabitsData } = useGetHabits();

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message,
      });
    }
    if (UserData) {
      setUserData(UserData);
    }
  }, [error, UserData]);

  const getRandomHabit = (): string => {
    if (!HabitsData?.length) {
      return "";
    }
    const index = Math.floor(Math.random() * HabitsData?.length);
    return HabitsData?.map(({ habit_layer }) => habit_layer)?.[index];
  };

  return (
    <HomeWrapper>
      <HomeHeader>
        <View>
          <Text
            color="black"
            fontSize={2}
            fontWeight={700}
            text={"Hi, " + upperText(userData?.user_name, 0) + "👋🏻"}
          />
          <Text
            color="grey"
            fontSize={5}
            fontWeight={500}
            text="Let’s make habits together!"
          />
        </View>
        <HabitEmoji>
          <Text fontSize={5} fontWeight={500} text={getRandomHabit()} />
        </HabitEmoji>
      </HomeHeader>

      <View>
        <FlatList
          data={getDays()}
          renderItem={({ item }) => <Calendar {...item} />}
          keyExtractor={(_, index) => String(index)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          paddingHorizontal: paddingHorizontal,
          marginTop: Platform.OS === "ios" ? 45 : 30,
          marginBottom: Platform.OS === "ios" ? 15 : 5,
        }}
      >
        <Text color="black" fontSize={3} text="Habits" fontWeight={700} />
      </View>
      <HabitsWrapper>
        {HabitsData?.map((habit: HabitType) => {
          return <Habit {...habit} />;
        })}
      </HabitsWrapper>
      <Toast />
    </HomeWrapper>
  );
});

export default Home;
