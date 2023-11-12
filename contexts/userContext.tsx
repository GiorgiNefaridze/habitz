import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  userContextType,
  UserContextProviderType,
  StateType,
  ActionType,
} from "./Types";

export const userContext = createContext<userContextType>(
  {} as userContextType
);

const userReducer = (state: StateType, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN": {
      const token = payload?.token;
      const name = payload?.name;

      return {
        ...state,
        name,
        token,
      };
    }
    case "LOGOUT": {
      return { ...state, name: null, token: null, habits: null };
    }
    case "RETRIVE_DATA": {
      return { ...state, habits: payload?.habits };
    }
    default: {
      return state;
    }
  }
};

const UserContext = () => {
  return useContext(userContext);
};

const UserContextProvider = ({
  children,
}: UserContextProviderType): ReactNode => {
  const [state, dispatch] = useReducer(userReducer, {
    name: null,
    token: null,
    habits: null,
  });

  useEffect(() => {
    (async () => {
      if (state.token === null) {
        return;
      }
      await AsyncStorage.setItem("token", state?.token ?? "");
    })();
  }, [state.token]);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export { UserContext, UserContextProvider };
