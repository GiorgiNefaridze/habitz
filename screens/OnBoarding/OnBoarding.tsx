import { FC, memo } from "react";
import { Image, Dimensions, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { paddingHorizontal } from "../../CONSTANTS";
import { NavigationType } from "./Types";
import { Routes } from "../../ROUTES";

import { OnBoardingWrapper } from "./OnBoarding.style";

const screenWidth: number = Dimensions.get("screen").width;

const OnBoarding: FC<NavigationType> = memo(({ navigation: { navigate } }) => {
  const handleNavigate = () => {
    navigate(Routes.SignIn.toString());
  };

  return (
    <OnBoardingWrapper>
      <Image
        source={require("../../assets/onBoarding.png")}
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
            fontSize={40}
            fontWeight={900}
            text="Create Good Habits"
            lineHeight={48}
            shadows
          />
          <Text
            color="white"
            fontSize={15}
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
            fontSize={16}
            fontWeight={600}
            text="Continue with E-mail"
          />
        </Button>
      </View>
    </OnBoardingWrapper>
  );
});

export default OnBoarding;
