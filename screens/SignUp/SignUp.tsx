import { useState, FC, memo } from "react";
import { View, Dimensions, KeyboardAvoidingView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { colors, paddingHorizontal } from "../../CONSTANTS";
import { NavigationType } from "../OnBoarding/Types";

import { FormHeader } from "../SignIn/SignIn.style";

const screenWidth: number = Dimensions.get("screen").width;

const SignUp: FC<NavigationType> = memo(({ navigation: { goBack } }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNavigate = () => {
    goBack();
  };

  const handleSignUp = () => {};

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
        <View>
          <Text text="Name" color="black" fontSize={15} fontWeight={700} />
          <Input
            width={screenWidth - 2 * paddingHorizontal}
            padding={10}
            placeholderTextColor="grey"
            secure={false}
            type="default"
            placeholder="Enter your name"
            onChange={setName}
            value={name}
          />
        </View>
        <View>
          <Text text="Email" color="black" fontSize={15} fontWeight={700} />
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
            secure
            type="default"
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
