import { View, Text } from "react-native";

import { UserContext } from "../../contexts/userContext";

const Home = () => {
  const { state } = UserContext();

  return (
    <View>
      <Text>{state.name}</Text>
      <Text>{state.token}</Text>
    </View>
  );
};

export default Home;
