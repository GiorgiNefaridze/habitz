import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./navigation/StackNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
