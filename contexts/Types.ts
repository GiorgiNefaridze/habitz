import { ReactNode, Dispatch } from "react";

export type userContextType = {
  dispatch: Dispatch<ActionType>;
  state: StateType;
};

export type UserContextProviderType = {
  children: ReactNode;
};

export type StateType = {
  name: string | null;
  token: string | null;
  errorMessage: string | null;
  successMessage: string | null;
};

export type ActionType = {
  type: "LOGIN" | "LOGOUT";
  payload: {};
};
