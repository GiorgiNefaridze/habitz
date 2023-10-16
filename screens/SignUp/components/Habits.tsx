import { memo, useState, Dispatch, SetStateAction } from "react";
import { FlatList, Image, View } from "react-native";

import Text from "../../../components/Text/Text";
import { screenWidth } from "../SignUp";
import { paddingHorizontal } from "../../../CONSTANTS";
import { habits } from "../data";

import DrinkWater from "../../assets/drinkWater.png";
import { ContainerBox, Wrapper } from "../SignUp.style";

export type HabitsBoxType = {
  name: string;
  img: ReturnType<typeof DrinkWater>;
  setHabits: Dispatch<SetStateAction<string[]>>;
};

const HabitsBox = memo(({ name, img, setHabits }: HabitsBoxType) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <ContainerBox
      style={{
        width: (screenWidth - 2 * paddingHorizontal) / 2 - 5,
        paddingLeft: 0,
        paddingRight: 0,
      }}
      onPress={() => {
        setHabits((prevHabits: string[]) => {
          if (
            prevHabits?.length &&
            prevHabits?.some((habit) => habit === name)
          ) {
            setSelected(false);
            return prevHabits?.filter((habit) => habit !== name);
          } else {
            setSelected(true);
            return [...prevHabits, name];
          }
        });
      }}
      selected={selected}
    >
      <Image source={img} />
      <Text color="black" fontSize={5} fontWeight={700} text={name} />
    </ContainerBox>
  );
});

const Habits = memo(
  ({ setHabits }: { setHabits: Dispatch<SetStateAction<string[]>> }) => {
    return (
      <Wrapper>
        <View>
          <Text
            color="black"
            fontSize={3}
            fontWeight={700}
            text="Choose your first habits"
          />
          <Text
            color="#686873"
            fontSize={5}
            fontWeight={500}
            text="You may add more habits later"
          />
        </View>
        <FlatList
          data={habits}
          renderItem={({ item }) => (
            <HabitsBox {...item} setHabits={setHabits} />
          )}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={{
            marginBottom: 15,
            justifyContent: "space-between",
          }}
        />
      </Wrapper>
    );
  }
);

export default Habits;
