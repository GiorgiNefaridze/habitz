import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../ROUTES";

const Stack = createStackNavigator();

type StackScreens = { path: string; component: JSX.Element };

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home.path}
      screenOptions={{ header: () => null }}
    >
      {Object.values(Routes).map(
        ({ path, component }: StackScreens, idx: number) => {
          return <Stack.Screen key={idx} name={path} component={component} />;
        }
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
