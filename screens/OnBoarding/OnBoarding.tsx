import { FC, memo } from "react";
import { Image, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { screenWidth } from "../SignUp/SignUp";
import { paddingHorizontal } from "../../CONSTANTS";
import { NavigationType } from "./Types";
import { Routes } from "../../ROUTES";

import Cover from "../../assets/onBoarding.png";
import { OnBoardingWrapper } from "./OnBoarding.style";

const OnBoarding: FC<NavigationType> = memo(({ navigation: { navigate } }) => {
  const handleNavigate = () => {
    navigate(Routes.SignIn.path);
  };

  return (
    <OnBoardingWrapper>
      <Image
        source={Cover}
        style={{ width: screenWidth - 2 * paddingHorizontal }}
        resizeMode="contain"
      />
      <View
        style={{
          width: screenWidth - 2 * paddingHorizontal,
          rowGap: 40,
        }}
      >
        <View>
          <Text
            color="white"
            fontSize={1}
            fontWeight={900}
            text="Create Good Habits"
            lineHeight={48}
            shadows
          />
          <Text
            color="white"
            fontSize={5}
            fontWeight={300}
            lineHeight={18}
            text="Change your life by slowly adding new healty habits and sticking to them."
          />
        </View>
        <Button
          width={screenWidth - 2 * paddingHorizontal}
          backgroundColor="white"
          borderRadius={20}
          padding={8}
          onPress={handleNavigate}
          shadows
        >
          <FontAwesomeIcon icon={faArrowRightToBracket} color="black" />
          <Text
            color="black"
            fontSize={4}
            fontWeight={600}
            text="Continue with E-mail"
          />
        </Button>
      </View>
    </OnBoardingWrapper>
  );
});

export default OnBoarding;
