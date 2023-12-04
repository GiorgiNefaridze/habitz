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
import CreateHabit from "./screens/CreateHabit/CreateHabit";
import Logout from "./screens/Logout/Logout";

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
  Dashboard: {
    path: "Dashboard",
    component: Home,
    icon: faHome,
  },
  CreateHabit: {
    path: "CreateHabit",
    component: CreateHabit,
    icon: faCirclePlus,
  },
  Logout: {
    path: "Logout",
    component: Logout,
    icon: faArrowRightFromBracket,
  },
};

export { Routes, TabBarRoutes };
