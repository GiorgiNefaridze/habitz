import { ReactNode, Dispatch } from "react";

export type userContextType = {
  dispatch: Dispatch<ActionType>;
  state: StateType;
};

export type UserContextProviderType = (props: {
  children: ReactNode;
}) => ReactNode;

export type StateType = {
  token: string | null;
};

export type ActionType = {
  type: "LOGIN" | "LOGOUT";
  payload: StateType;
};
