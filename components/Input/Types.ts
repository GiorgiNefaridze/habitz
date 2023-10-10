import { KeyboardTypeOptions } from "react-native";

export type InputType = {
  width: number;
  padding: number;
  secure: boolean;
  type: KeyboardTypeOptions;
  value: string;
  onChange: (value: string) => void;
  placeholderTextColor: string;
  placeholder: string;
};
