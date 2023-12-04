import { createContext, useContext, useReducer, useEffect } from "react";
import Storage from "@react-native-async-storage/async-storage";

import {
  userContextType,
  UserContextProviderType,
  StateType,
  ActionType,
} from "./Types";

export const userContext = createContext({} as userContextType);

const authReducer = (state: StateType, action: ActionType) => {
  const { payload, type } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, token: payload.token };
    case "LOGOUT":
      return { ...state, token: null };
    default:
      return state;
  }
};

const UserContext = () => {
  return useContext(userContext);
};

const UserContextProvider: UserContextProviderType = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
  });

  const { token } = state;

  useEffect(() => {
    (async () => {
      if (token == null) {
        return;
      }
      await Storage.setItem("token", token);
    })();
  }, [token]);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export { UserContext, UserContextProvider };
