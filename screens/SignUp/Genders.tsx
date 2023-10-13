import { useState, memo, Dispatch, SetStateAction, useEffect } from "react";
import { FlatList, Image } from "react-native";

import Text from "../../components/Text/Text";

import MaleImg from "../../assets/male.png";
import FemaleImg from "../../assets/female.png";
import { GenderWrapper, GenderContainer } from "./SignUp.style";

const genders = [
  {
    name: "Male",
    img: MaleImg,
  },
  {
    name: "Female",
    img: FemaleImg,
  },
];

type GenderBoxType = {
  name: string;
  img: ReturnType<typeof MaleImg>;
  selectedGender: string;
  setSelectedGender: Dispatch<SetStateAction<string>>;
};

const GenderBox = memo(
  ({ name, img, selectedGender, setSelectedGender }: GenderBoxType) => {
    const [selected, setSelected] = useState<boolean>(false);

    useEffect(() => {
      setSelected(selectedGender == name ? true : false);
    }, [name, selectedGender]);

    return (
      <GenderContainer
        onPress={() => setSelectedGender(name)}
        selected={selected}
      >
        <Image source={img} />
        <Text color="black" fontSize={16} fontWeight={700} text={name} />
      </GenderContainer>
    );
  }
);

const Genders = memo(
  ({ setIsMale }: { setIsMale: Dispatch<SetStateAction<boolean>> }) => {
    const [selectedGender, setSelectedGender] = useState(genders[0].name);

    useEffect(() => {
      setIsMale(selectedGender === genders[0].name);
    }, [selectedGender]);

    return (
      <GenderWrapper>
        <Text
          color="black"
          fontSize={25}
          fontWeight={700}
          text="Choose your gender"
        />
        <FlatList
          data={genders}
          renderItem={({ item }) => (
            <GenderBox
              {...item}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          )}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
        />
      </GenderWrapper>
    );
  }
);

export default Genders;
