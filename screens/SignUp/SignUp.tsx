import { useState, FC, memo, useEffect } from "react";
import { View, Dimensions, KeyboardAvoidingView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-native-toast-message";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Inputs from "./components/Inputs";
import Genders from "./components/Genders";
import Habits from "./components/Habits";
import { colors, paddingHorizontal } from "../../CONSTANTS";
import { isValid } from "../../server/dist/utils/isValidText";
import { UserContext } from "../../contexts/userContext";
import { NavigationType } from "../OnBoarding/Types";
import { Routes } from "../../ROUTES";
import { useRegister } from "../../hooks/useRegister";

import { FormHeader } from "../SignIn/SignIn.style";

export const screenWidth: number = Dimensions.get("screen").width;

const SignUp: FC<NavigationType> = memo(
  ({ navigation: { goBack, navigate } }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isMale, setIsMale] = useState<boolean>(false);
    const [habits, setHabits] = useState<string[]>([]);
    const [page, setPage] = useState<number>(1);

    const { state } = UserContext();
    const { register, error, setError } = useRegister();

    const handleNavigate = () => {
      if (page != 1) {
        setPage((prev) => prev - 1);
        return;
      }
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

    const handleSignUp = async () => {
      if (!isValid([name, email, password])) {
        return;
      }
      if (page < 3) {
        setPage((prev) => prev + 1);
        return;
      }

      const data = {
        name,
        email,
        password,
        isMale,
        habits,
      };

      const res = await register(data);

      if (!res?.response) {
        return;
      }

      navigate(Routes.SignIn.path);
    };

    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
          rowGap: 20,
          backgroundColor: colors.secondary,
          paddingBottom: 20,
        }}
      >
        {state?.errorMessage && (
          <Text
            color="red"
            fontSize={4}
            fontWeight={900}
            text={state.errorMessage}
          />
        )}
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
          {page == 3 && <Habits setHabits={setHabits} />}
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
      </KeyboardAvoidingView>
    );
  }
);

export default SignUp;
