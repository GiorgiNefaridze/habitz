import { useState, memo, Dispatch, SetStateAction, useEffect } from "react";
import { FlatList, Image } from "react-native";

import Text from "../../../components/Text/Text";
import { genders } from "../data";

import MaleImg from "../../assets/male.png";
import { Wrapper, ContainerBox } from "../SignUp.style";

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
      <ContainerBox onPress={() => setSelectedGender(name)} selected={selected}>
        <Image source={img} />
        <Text color="black" fontSize={16} fontWeight={700} text={name} />
      </ContainerBox>
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
      <Wrapper>
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
      </Wrapper>
    );
  }
);

export default Genders;
