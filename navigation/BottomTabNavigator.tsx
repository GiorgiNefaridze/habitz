import { Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { screenWidth } from "../screens/SignUp/SignUp";
import { TabBarRoutes } from "../ROUTES";
import { colors } from "../CONSTANTS";

const Tab = createBottomTabNavigator();

const tabBarWidth = 310;

const tabBarStyle = {
  width: tabBarWidth,
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  position: "absolute",
  bottom: Platform.OS == "ios" ? 40 : 20,
  left: (screenWidth - tabBarWidth) / 2,
  backgroundColor: "white",
  borderRadius: 20,
  borderWidth: 1,
  borderColor: "#9B9BA1",
} as const;

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabBarRoutes.Dashboard.path}
      screenOptions={{
        header: () => null,
        tabBarStyle: tabBarStyle,
      }}
    >
      {Object.values(TabBarRoutes).map(({ component, path, icon }) => (
        <Tab.Screen
          name={path}
          component={component}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    height: Platform.OS === "ios" ? 55 : null,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    color={focused ? colors.primary : "grey"}
                    size={path === TabBarRoutes.CreateHabit.path ? 35 : 22}
                  />
                </View>
              );
            },
            tabBarShowLabel: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
