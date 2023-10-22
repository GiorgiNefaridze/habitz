import { useEffect, memo, FC } from "react";
import { View, Text } from "react-native";

import { NavigationType } from "../OnBoarding/Types";
import { useRetriveUserData } from "../../hooks/useRetriveUserData";

const Home: FC<NavigationType> = memo(
  ({ navigation: { navigate, goBack } }) => {
    const { retriveUserData } = useRetriveUserData();

    useEffect(() => {
      (async () => {
        const user = await retriveUserData();
      })();
    }, []);

    return (
      <View>
        <Text>heheh</Text>
        <Text>heheh</Text>
      </View>
    );
  }
);

export default Home;
