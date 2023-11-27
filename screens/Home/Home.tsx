import { useEffect, memo, FC, useState, useCallback } from "react";
import { View, Image, FlatList } from "react-native";

import { NavigationType } from "../OnBoarding/Types";
import { useRetriveUserData } from "../../hooks/useRetriveUserData";
import { UserContext } from "../../contexts/userContext";
import { upperText } from "../../utils/upperText";
import { habits } from "../SignUp/data";
import { getDays } from "../../utils/dateRecognizer";
import Habit from "./Habit/Habit";
import Text from "../../components/Text/Text";
import { paddingHorizontal } from "../../CONSTANTS";
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
  const [habit, setHabit] = useState([]);
  const [days, setDays] = useState<CalendarType[]>([]);

  const { retriveUserData } = useRetriveUserData();
  const { state } = UserContext();

  const getRandomHabit = useCallback(() => {
    const userHabits = userData?.habits;
    const randomIndex = Math.floor(Math.random() * userHabits?.length);

    return habits.find(({ name }) => name === userHabits?.[randomIndex])?.img;
  }, [userData?.habits]);

  useEffect(() => {
    const date = getDays();
    setDays(date);
    (async () => {
      const user = await retriveUserData();
      setUserData(user);
    })();

    fetch("http://192.168.100.4:3400/api/habit", {
      method: "GEt",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxMDI3NDQxfQ.416vXKVozgVqXopGh4h4tTqa-_nKypt3z4z-5m85F0Q",
      },
    })
      .then((res) => res.json())
      .then((r) => {
        setHabit(r.response);
      })
      .catch((er) => {
        console.log(er.response.data);
      });
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
      <View
        style={{
          paddingHorizontal: paddingHorizontal - 10,
          marginTop: 30,
          rowGap: 15,
        }}
      >
        <Text color="black" fontSize={3} text="Habits" fontWeight={700} />
        <FlatList
          data={habit}
          renderItem={({ item }) => <Habit habit={item} />}
          keyExtractor={(item) => item}
        />
      </View>
    </HomeWrapper>
  );
});

export default Home;
