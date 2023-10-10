import { memo, FC, useState } from "react";
import { View } from "react-native";

import Input from "../../components/Input/Input";

const SignIn: FC = memo(() => {
  const [value, setValue] = useState<string>("");

  return (
    <View>
      <Input
        padding={10}
        placeholderTextColor="grey"
        secure={false}
        type="email-address"
        width={400}
        borderBottomColor="green"
        placeholder="Enter your email address"
        onChange={setValue}
        value={value}
      />
    </View>
  );
});

export default SignIn;
