import styled from "styled-components/native";

import { Button } from "./Types";

export const Btn = styled.TouchableOpacity<Button>`
  width: ${({ width }) => width};
  border-top-left-radius: ${({ borderRadius }) => borderRadius};
  border-top-right-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-left-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-right-radius: ${({ borderRadius }) => borderRadius};
  padding-top: ${({ padding }) => padding};
  padding-bottom: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-width: ${({ borderColor }) => (borderColor ? "1px" : "0px")};
  border-color: ${({ borderColor }) => borderColor ?? "transparent"};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10;
`;
