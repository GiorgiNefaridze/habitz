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
import BottomTabNavigation from "./navigation/BottomTabNavigator";

const Logout = () => {
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
    component: Logout,
    icon: faCirclePlus,
  },
  Logout: {
    path: "Logout",
    component: Logout,
    icon: faArrowRightFromBracket,
  },
};

export { Routes, TabBarRoutes };
