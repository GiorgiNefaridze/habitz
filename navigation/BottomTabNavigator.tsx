import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { TabBarRoutes } from "../ROUTES";
import { colors } from "../CONSTANTS";

const Tab = createBottomTabNavigator();

const screenWidth: number = Dimensions.get("screen").width,
  tabBarWidth = 310;

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        header: () => null,
        tabBarStyle: {
          width: tabBarWidth,
          height: 57,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "absolute",
          bottom: 20,
          left: (screenWidth - tabBarWidth) / 2,
          backgroundColor: "white",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#9B9BA1",
        },
      }}
    >
      {Object.values(TabBarRoutes).map(({ component, path, icon }) => {
        return (
          <Tab.Screen
            name={path}
            component={component}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesomeIcon
                  icon={icon}
                  color={focused ? colors.primary : "grey"}
                  size={path === "AddHabit" ? 33 : 22}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
