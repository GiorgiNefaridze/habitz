import { ReactNode } from "react";

export type Button = {
  width: number;
  padding: number;
  borderRadius: number;
  backgroundColor: string;
  children: ReactNode;
  onPress: () => void;
};
