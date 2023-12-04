import { Dispatch, SetStateAction, memo, useState, ReactNode } from "react";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import ToggleSwitch from "toggle-switch-react-native";

import Text from "./Text/Text";
import Input from "./Input/Input";
import { colors, paddingHorizontal } from "../CONSTANTS";
import { screenWidth } from "../screens/SignUp/SignUp";

import { ListWrapper } from "../screens/CreateHabit/CreateHabit.style";

type ListType = (props: {
  label: string;
  data: string[] | {}[];
  value: string;
  selectItem: Dispatch<SetStateAction<string>>;
}) => ReactNode;

export const List: ListType = memo(({ label, data, selectItem, value }) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <ListWrapper>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text color="black" fontSize={5} fontWeight={700} text={label} />
        <ToggleSwitch
          isOn={isOn}
          onColor={colors.primary}
          offColor="grey"
          label="Custom "
          labelStyle={{ color: "black", fontWeight: "700" }}
          size="medium"
          onToggle={(isOn) => setIsOn(isOn)}
        />
      </View>
      {isOn ? (
        <Input
          onChange={selectItem}
          padding={5}
          placeholder={"Enter " + label?.toLowerCase()}
          secure={false}
          type="default"
          value={value}
          width={screenWidth - 2 * paddingHorizontal}
          placeholderTextColor="grey"
        />
      ) : (
        <SelectList
          data={data}
          setSelected={(item: string) => selectItem(item)}
          save="value"
        />
      )}
    </ListWrapper>
  );
});
