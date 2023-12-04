import { CSSProperties } from "react";
import { View } from "react-native";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { colors } from "../../CONSTANTS";
import { useLogout } from "../../hooks/useLogout";

const Logout = () => {
  const style = {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties;

  const { logout } = useLogout();

  return (
    <View style={style}>
      <Button
        backgroundColor={colors.primary}
        borderRadius={10}
        onPress={logout}
        padding={5}
        width={100}
        children={
          <Text color="white" fontSize={4} text="Logout" fontWeight={600} />
        }
      />
    </View>
  );
};

export default Logout;
