import { ReactNode, Dispatch, SetStateAction } from "react";
import { View, KeyboardTypeOptions } from "react-native";

import Text from "./Text/Text";
import Input from "./Input/Input";
import { screenWidth } from "../screens/SignUp/SignUp";
import { paddingHorizontal } from "../CONSTANTS";

type PropTypes = {
  label: string;
  secure: boolean;
  type: KeyboardTypeOptions;
  placeholder: string;
  valueSetter: Dispatch<SetStateAction<string>>;
  value: string;
};
type InputLabelType = (props: PropTypes) => ReactNode;

const InputLabel: InputLabelType = (props) => {
  const { label, secure, type, placeholder, valueSetter, value } = props;
  return (
    <View>
      <Text text={label} color="black" fontSize={5} fontWeight={700} />
      <Input
        width={screenWidth - 2 * paddingHorizontal}
        padding={10}
        placeholderTextColor="grey"
        secure={secure}
        type={type}
        placeholder={placeholder}
        onChange={valueSetter}
        value={value}
      />
    </View>
  );
};

export default InputLabel;
