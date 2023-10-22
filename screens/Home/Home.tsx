import { useEffect, memo, FC, useState } from "react";
import { View } from "react-native";

import { NavigationType } from "../OnBoarding/Types";
import { useRetriveUserData } from "../../hooks/useRetriveUserData";
import { upperText } from "../../utils/upperText";
import Text from "../../components/Text/Text";

import { HomeWrapper, HomeHeader } from "./Home.style";

const Home: FC<NavigationType> = memo(
  ({ navigation: { navigate, goBack } }) => {
    const [userData, setUserData] = useState({});

    const { retriveUserData } = useRetriveUserData();

    useEffect(() => {
      (async () => {
        const user = await retriveUserData();
        setUserData(user);
      })();
    }, []);

    return (
      <HomeWrapper>
        <HomeHeader>
          <View>
            <Text
              color="black"
              fontSize={2}
              fontWeight={700}
              text={"Hi, " + upperText("mari", 0) + "👋🏻"}
            />
            <Text
              color="grey"
              fontSize={5}
              fontWeight={500}
              text="Let’s make habits together!"
            />
          </View>
        </HomeHeader>
      </HomeWrapper>
    );
  }
);

export default Home;
