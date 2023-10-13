import { TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { InputType } from "./Types";

import { TextInput, TextInputWrapper } from "./Input.syle";

const Input = (props: InputType) => {
  const {
    value,
    onChange,
    secure,
    type,
    placeholderTextColor,
    placeholder,
    ...styleProps
  } = props;

  const borderColor = value?.trim()?.length >= 4 ? "green" : "grey";

  return (
    <TextInputWrapper {...styleProps} borderBottomColor={borderColor}>
      <TextInput
        value={value}
        onChangeText={onChange}
        secureTextEntry={secure}
        keyboardType={type ?? "default"}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        cursorColor="black"
        {...styleProps}
      />
      <TouchableOpacity onPress={() => onChange("")}>
        <FontAwesomeIcon icon={faCircleXmark} size={20} />
      </TouchableOpacity>
    </TextInputWrapper>
  );
};

export default Input;
