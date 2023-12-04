import { memo, FC, useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import InputLabel from "../../components/InputLabel";
import { paddingHorizontal, colors } from "../../CONSTANTS";
import { screenWidth } from "../SignUp/SignUp";
import { NavigationType } from "../OnBoarding/Types";
import { useLogin } from "../../hooks/useLogin";
import { Routes } from "../../ROUTES";

import { FormHeader, FormWrapper } from "./SignIn.style";

const SignIn: FC<NavigationType> = memo(({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutateAsync: Login, error } = useLogin();

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message,
      });
    }
  }, [error]);

  const handleLogin = async () => {
    const loginDto = {
      email,
      password,
    };
    const data = await Login(loginDto);

    if (data && Object.keys(data).length) {
      setEmail("");
      setPassword("");
      navigation.navigate(Routes.Home.path);
    }
  };

  return (
    <FormWrapper>
      <View style={{ flex: 1, alignItems: "center", rowGap: 20 }}>
        <FormHeader width={screenWidth}>
          <Button
            borderRadius={15}
            onPress={() => navigation.navigate(Routes.SignUp.path)}
            padding={12}
            backgroundColor="transparent"
            width={45}
            borderColor="grey"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Text
            color="black"
            fontSize={3}
            fontWeight={900}
            text="Continue with E-mail"
          />
        </FormHeader>
        <InputLabel
          label="E-mail"
          placeholder="Enter your email address"
          secure={false}
          type="email-address"
          value={email}
          valueSetter={setEmail}
        />
        <InputLabel
          label="Password"
          placeholder="Enter your password"
          secure={true}
          type="default"
          value={password}
          valueSetter={setPassword}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.SignUp.path)}>
        <Text
          color={colors.primary}
          fontSize={5}
          fontWeight={700}
          text="Don’t have account? Let’s create!"
        />
      </TouchableOpacity>
      <Button
        width={screenWidth - 2 * paddingHorizontal}
        borderRadius={20}
        shadows
        onPress={handleLogin}
        backgroundColor={colors.primary}
        padding={10}
      >
        <Text color="white" fontSize={3} fontWeight={700} text="Next" />
      </Button>
      <Toast />
    </FormWrapper>
  );
});

export default SignIn;
