import styled from "styled-components/native";

import { paddingHorizontal } from "../../CONSTANTS";

export const FormHeader = styled.View<{ width: number }>`
  flex-direction: row;
  align-items: center;
  column-gap: 10;
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
  padding-top: 55;
  padding-bottom: 15;
  border-bottom-width: 2;
  border-bottom-style: solid;
  border-bottom-color: #eaecf0;
  background-color: white;
`;
