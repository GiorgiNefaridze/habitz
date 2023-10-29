import { useEffect, memo, FC, useState } from "react";
import { View, Image, FlatList } from "react-native";

import { NavigationType } from "../OnBoarding/Types";
import { useRetriveUserData } from "../../hooks/useRetriveUserData";
import { upperText } from "../../utils/upperText";
import { habits } from "../SignUp/data";
import { getDays } from "../../utils/dateRecognizer";
import Text from "../../components/Text/Text";
import Calendar from "./Calendar/Calendar";

import { HomeWrapper, HomeHeader, HabitEmoji } from "./Home.style";

export type CalendarType = {
  date: number;
  day: string;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
};

const HabitEmojiSize: number = 23;

const Home: FC<NavigationType> = memo(() => {
  const [userData, setUserData] = useState({});
  const [days, setDays] = useState<CalendarType[]>([]);

  const { retriveUserData } = useRetriveUserData();

  const getRandomHabit = () => {
    const userHabits = userData?.habits;
    const randomIndex = Math.floor(Math.random() * userHabits?.length);

    return habits.find((habit) => habit.name === userHabits?.[randomIndex])
      ?.img;
  };

  useEffect(() => {
    const date = getDays();
    setDays(date);
    (async () => {
      const user = await retriveUserData();
      setUserData(user);
    })();
  }, []);

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
          <Image
            style={{
              width: HabitEmojiSize,
              height: HabitEmojiSize,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: [
                { translateX: -HabitEmojiSize / 2 },
                { translateY: -HabitEmojiSize / 2 },
              ],
            }}
            source={getRandomHabit()}
          />
        </HabitEmoji>
      </HomeHeader>
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={days}
          renderItem={({ item }) => <Calendar {...item} />}
          keyExtractor={(item) => Math.random().toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </HomeWrapper>
  );
});

export default Home;
