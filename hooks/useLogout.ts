import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../contexts/userContext";
import { Routes } from "../ROUTES";

const useLogout = () => {
  const { dispatch } = UserContext();
  const navigation = useNavigation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigation.navigate(Routes.SignIn.path as never);
  };

  return { logout };
};

export { useLogout };
