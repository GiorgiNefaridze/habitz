import { createContext, useContext, useReducer, ReactNode } from "react";

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
    errorMessage: null,
    successMessage: null,
  });

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export { UserContext, UserContextProvider };
