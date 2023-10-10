import styled from "styled-components/native";

import { InputType } from "./Types";

export const TextInput = styled.TextInput<InputType>`
  width: ${({ width }) => width + "px"};
  padding-left: ${({ padding }) => padding + "px"};
  background-color: transparent;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ borderBottomColor }) =>
    borderBottomColor ?? "#CDCDD0"};
  transition: border-bottom 0.5s ease;
`;
