import { useState, FC, memo } from "react";
import { View, Dimensions, KeyboardAvoidingView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Inputs from "./Inputs";
import Genders from "./Genders";
import Habits from "./Habits";
import { colors, paddingHorizontal } from "../../CONSTANTS";
import { isValid } from "../../server/dist/utils/isValidText";
import { NavigationType } from "../OnBoarding/Types";

import { FormHeader } from "../SignIn/SignIn.style";

const screenWidth: number = Dimensions.get("screen").width;

const SignUp: FC<NavigationType> = memo(({ navigation: { goBack } }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isMale, setIsMale] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handleNavigate = () => {
    if (page != 1) {
      setPage((prev) => prev - 1);
      return;
    }
    goBack();
  };

  const handleSignUp = () => {
    if (!isValid([name, email, password])) {
      return;
    }
    if (page < 3) {
      setPage((prev) => prev + 1);
    }
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
        {page == 3 && <Habits />}
      </View>
      <Button
        width={screenWidth - 2 * paddingHorizontal}
        borderRadius={20}
        shadows
        onPress={handleSignUp}
        backgroundColor={colors.primary}
        padding={10}
      >
        <Text color="white" fontSize={20} fontWeight={700} text="Next" />
      </Button>
    </KeyboardAvoidingView>
  );
});

export default SignUp;
