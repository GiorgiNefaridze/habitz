import { useEffect, memo } from "react";
import { View } from "react-native";
import {
  faArrowRightFromBracket,
  faCirclePlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useIsFocused } from "@react-navigation/native";

import OnBoarding from "./screens/OnBoarding/OnBoarding";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import Home from "./screens/Home/Home";
import CreateHabit from "./screens/CreateHabit/CreateHabit";
import BottomTabNavigation from "./navigation/BottomTabNavigator";
import { NavigationType } from "./screens/OnBoarding/Types";

import { useLogout } from "./hooks/useLogout";

const Logout = memo(() => {
  const { logout } = useLogout();
  const isFocused = useIsFocused();
  useEffect(() => {
    logout();
  }, [isFocused]);
  return <View></View>;
});

const AddHabit = memo(({ navigation }: NavigationType) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    navigation.navigate(Routes.AddHabit.path);
  }, [isFocused]);
  return <View></View>;
});

const Routes = {
  OnBoarding: {
    path: "OnBoarding",
    component: OnBoarding,
  },
  SignUp: {
    path: "SignUp",
    component: SignUp,
  },
  SignIn: {
    path: "SignIn",
    component: SignIn,
  },
  AddHabit: {
    path: "AddHabitComponent",
    component: CreateHabit,
  },
  Home: {
    path: "Home",
    component: BottomTabNavigation,
  },
};

const TabBarRoutes = {
  HomePage: {
    path: "HomePage",
    component: Home,
    icon: faHome,
  },
  AddHabit: {
    path: "AddHabit",
    component: AddHabit,
    icon: faCirclePlus,
  },
  Logout: {
    path: "Logout",
    component: Logout,
    icon: faArrowRightFromBracket,
  },
};

export { Routes, TabBarRoutes };
