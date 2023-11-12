import { useEffect } from "react";
import { View } from "react-native";
import {
  faArrowRightFromBracket,
  faCirclePlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import OnBoarding from "./screens/OnBoarding/OnBoarding";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import Home from "./screens/Home/Home";
import AddHabit from "./screens/AddHabit/AddHabit";
import BottomTabNavigation from "./navigation/BottomTabNavigator";

import { useLogout } from "./hooks/useLogout";

const Logout = () => {
  const { logout } = useLogout();
  useEffect(() => {
    logout();
  }, []);
  return <View></View>;
};

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
