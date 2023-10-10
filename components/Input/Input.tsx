import { InputType } from "./Types";

import { TextInput } from "./Input.syle";

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

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      secureTextEntry={secure}
      keyboardType={type ?? "default"}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      {...styleProps}
    />
  );
};

export default Input;
