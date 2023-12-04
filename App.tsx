import "react-native-gesture-handler";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import QueryClientWrapper from "./QueryClientWrapper";
import StackNavigation from "./navigation/StackNavigation";
import { UserContextProvider } from "./contexts/userContext";

const App = () => {
  //Ignore all the styles's warning when app run on prod
  LogBox.ignoreAllLogs();
  return (
    <QueryClientWrapper>
      <UserContextProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </UserContextProvider>
    </QueryClientWrapper>
  );
};

export default App;
