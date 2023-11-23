import { Dispatch, SetStateAction, memo, useState } from "react";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import ToggleSwitch from "toggle-switch-react-native";

import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import { colors, paddingHorizontal } from "../../CONSTANTS";
import { screenWidth } from "../SignUp/SignUp";

import { ListWrapper } from "./CreateHabit.style";

type ListType = {
  label: string;
  data: string[];
  value: string;
  selectItem: Dispatch<SetStateAction<string>>;
};

export const List = memo(({ label, data, selectItem, value }: ListType) => {
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
