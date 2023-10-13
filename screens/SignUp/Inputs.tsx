import { Dispatch, SetStateAction } from "react";
import { View, Dimensions } from "react-native";

import Input from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import { paddingHorizontal } from "../../CONSTANTS";

const screenWidth: number = Dimensions.get("screen").width;

type InputsType = {
  name: string;
  email: string;
  password: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
};

const Inputs = ({
  email,
  name,
  password,
  setEmail,
  setName,
  setPassword,
}: InputsType) => {
  return (
    <>
      <View>
        <Text text="Name" color="black" fontSize={15} fontWeight={700} />
        <Input
          width={screenWidth - 2 * paddingHorizontal}
          padding={10}
          placeholderTextColor="grey"
          secure={false}
          type="default"
          placeholder="Enter your name"
          onChange={setName}
          value={name}
        />
      </View>
      <View>
        <Text text="Email" color="black" fontSize={15} fontWeight={700} />
        <Input
          width={screenWidth - 2 * paddingHorizontal}
          padding={10}
          placeholderTextColor="grey"
          secure={false}
          type="email-address"
          placeholder="Enter your email address"
          onChange={setEmail}
          value={email}
        />
      </View>
      <View>
        <Text text="Password" color="black" fontSize={15} fontWeight={700} />
        <Input
          width={screenWidth - 2 * paddingHorizontal}
          padding={10}
          placeholderTextColor="grey"
          secure
          type="default"
          placeholder="Enter your password"
          onChange={setPassword}
          value={password}
        />
      </View>
    </>
  );
};

export default Inputs;
