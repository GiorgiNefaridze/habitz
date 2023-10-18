import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./navigation/StackNavigation";
import { UserContextProvider } from "./contexts/userContext";

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
