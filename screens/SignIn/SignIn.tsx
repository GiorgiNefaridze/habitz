import { memo, FC, useState } from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { paddingHorizontal, colors } from "../../CONSTANTS";
import { NavigationType } from "../OnBoarding/Types";

import { FormHeader } from "./SignIn.style";

const screenWidth: number = Dimensions.get("screen").width;

const SignIn: FC<NavigationType> = memo(({ navigation: { goBack } }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNavigate = () => {
    goBack();
  };

  const handleLogin = () => {};

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        rowGap: 20,
        backgroundColor: colors.secondary,
        paddingBottom: 20,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", rowGap: 20 }}>
        <FormHeader width={screenWidth}>
          <Button
            borderRadius={15}
            onPress={handleNavigate}
            padding={12}
            backgroundColor="transparent"
            width={45}
            borderColor="grey"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Text
            color="black"
            fontSize={20}
            fontWeight={900}
            text="Continue with E-mail"
          />
        </FormHeader>
        <View>
          <Text text="E-mail" color="black" fontSize={15} fontWeight={700} />
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
            secure={false}
            type="email-address"
            placeholder="Enter your password"
            onChange={setPassword}
            value={password}
          />
        </View>
      </View>
      <Button
        width={screenWidth - 2 * paddingHorizontal}
        borderRadius={20}
        shadows
        onPress={handleLogin}
        backgroundColor={colors.primary}
        padding={10}
      >
        <Text color="white" fontSize={20} fontWeight={700} text="Next" />
      </Button>
    </SafeAreaView>
  );
});

export default SignIn;
