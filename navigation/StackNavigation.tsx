import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../ROUTES";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.OnBoarding?.toString()}
      screenOptions={{ header: () => null }}
    >
      {Object.values(Routes).map((screen, idx) => {
        return (
          <Stack.Screen
            key={idx}
            name={screen?.toString()}
            component={screen}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigation;
