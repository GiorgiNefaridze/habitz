import { memo, FC, useState, useEffect } from "react";
import { Dimensions, SafeAreaView, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { paddingHorizontal, colors } from "../../CONSTANTS";
import { NavigationType } from "../OnBoarding/Types";
import { useLogin } from "../../hooks/useLogin";
import { Routes } from "../../ROUTES";

import { FormHeader } from "./SignIn.style";

const screenWidth: number = Dimensions.get("screen").width;

const SignIn: FC<NavigationType> = memo(
  ({ navigation: { goBack, navigate } }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { login, error, setError } = useLogin();

    const handleNavigate = () => {
      goBack();
    };

    useEffect(() => {
      if (error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error,
        });
      }
      setError("");
    }, [error]);

    const handleLogin = async () => {
      const data = {
        email,
        password,
      };

      const resultData = await login(data);

      if (resultData && Object.keys(resultData)?.length) {
        navigate(Routes.Home.path);
      }
    };

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
              fontSize={3}
              fontWeight={900}
              text="Continue with E-mail"
            />
          </FormHeader>
          <View>
            <Text text="E-mail" color="black" fontSize={5} fontWeight={700} />
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
            <Text text="Password" color="black" fontSize={5} fontWeight={700} />
            <Input
              width={screenWidth - 2 * paddingHorizontal}
              padding={10}
              placeholderTextColor="grey"
              secure={true}
              type="email-address"
              placeholder="Enter your password"
              onChange={setPassword}
              value={password}
            />
          </View>
          {error && (
            <Text
              color="red"
              fontSize={5}
              fontWeight={700}
              text={error}
              lineHeight={15}
            />
          )}
        </View>
        <TouchableOpacity onPress={() => navigate(Routes.SignUp.path)}>
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
      </SafeAreaView>
    );
  }
);

export default SignIn;
