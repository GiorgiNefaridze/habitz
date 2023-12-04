import { useState, FC, memo, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Inputs from "./components/Inputs";
import Genders from "./components/Genders";
import { colors, paddingHorizontal } from "../../CONSTANTS";
import { isValid } from "../../server/src/utils/isValidText";
import { NavigationType } from "../OnBoarding/Types";
import { Routes } from "../../ROUTES";
import { RegisterDtoType } from "../../hooks/useRegister";
import { useRegister } from "../../hooks/useRegister";

import { FormHeader } from "../SignIn/SignIn.style";
import { FormWrapper } from "./SignUp.style";

export const screenWidth: number = Dimensions.get("screen").width;

enum Pages {
  First = 1,
  Second = 2,
}

const SignUp: FC<NavigationType> = memo(({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isMale, setIsMale] = useState<boolean>(false);
  const [page, setPage] = useState<number>(Pages.First);

  const { error, mutateAsync: Register } = useRegister();

  const handleNavigate = () => {
    if (page != 1) {
      setPage((prev) => prev - 1);
      return;
    }
    navigation.goBack();
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message,
      });
    }
  }, [error]);

  const handleSignUp = async () => {
    if (!isValid([name, email, password])) {
      return;
    }
    if (page < 2) {
      setPage((prev) => prev + 1);
      return;
    }

    const registerDto: RegisterDtoType = {
      name,
      email,
      password,
      isMale,
    };

    const data = await Register(registerDto);

    if (data && Object.keys(data).length) {
      navigation.navigate(Routes.SignIn.path);
    }
  };

  return (
    <FormWrapper>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          rowGap: 20,
        }}
      >
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
            text="Create Account"
          />
        </FormHeader>
        {page == 1 && (
          <Inputs
            email={email}
            name={name}
            password={password}
            setEmail={setEmail}
            setName={setName}
            setPassword={setPassword}
          />
        )}
        {page == 2 && <Genders setIsMale={setIsMale} />}
      </View>
      <Button
        width={screenWidth - 2 * paddingHorizontal}
        borderRadius={20}
        shadows
        onPress={handleSignUp}
        backgroundColor={colors.primary}
        padding={10}
      >
        <Text color="white" fontSize={3} fontWeight={700} text="Next" />
      </Button>
      <Toast />
    </FormWrapper>
  );
});

export default SignUp;
