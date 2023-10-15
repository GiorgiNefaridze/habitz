import { memo, useState } from "react";
import { FlatList, Image, View } from "react-native";

import Text from "../../../components/Text/Text";
import { screenWidth } from "../SignUp";
import { paddingHorizontal } from "../../../CONSTANTS";
import { habits } from "../data";

import DrinkWater from "../../assets/drinkWater.png";
import { ContainerBox, Wrapper } from "../SignUp.style";

type HabitsBoxType = {
  name: string;
  img: ReturnType<typeof DrinkWater>;
};

const HabitsBox = memo(({ name, img }: HabitsBoxType) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <ContainerBox
      style={{
        width: (screenWidth - 2 * paddingHorizontal) / 2 - 5,
        paddingLeft: 0,
        paddingRight: 0,
      }}
      onPress={() => setSelected((prev) => !prev)}
      selected={selected}
    >
      <Image source={img} />
      <Text color="black" fontSize={15} fontWeight={700} text={name} />
    </ContainerBox>
  );
});

const Habits = memo(() => {
  return (
    <Wrapper>
      <View>
        <Text
          color="black"
          fontSize={25}
          fontWeight={700}
          text="Choose your first habits"
        />
        <Text
          color="#686873"
          fontSize={11}
          fontWeight={500}
          text="You may add more habits later"
        />
      </View>
      <FlatList
        data={habits}
        renderItem={({ item }) => <HabitsBox {...item} />}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={{
          display: "flex",
          marginBottom: 15,
          justifyContent: "space-between",
        }}
      />
    </Wrapper>
  );
});

export default Habits;
