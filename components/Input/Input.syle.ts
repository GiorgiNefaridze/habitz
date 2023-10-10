import styled from "styled-components/native";

import { InputType } from "./Types";

export const TextInput = styled.TextInput<InputType>`
  flex: 1;
  padding-left: ${({ padding }) => padding + "px"};
  background-color: transparent;
`;

export const TextInputWrapper = styled.View<{
  width: number;
  borderBottomColor: string;
}>`
  width: ${({ width }) => width + "px"};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor};
`;
