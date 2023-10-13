import OnBoarding from "./screens/OnBoarding/OnBoarding";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import Home from "./screens/Home/Home";

export const Routes = {
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
    component: Home,
  },
};
