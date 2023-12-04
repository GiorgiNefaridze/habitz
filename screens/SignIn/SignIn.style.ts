import styled from "styled-components/native";

import { colors, paddingHorizontal } from "../../CONSTANTS";

export const FormWrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 20;
  background-color: ${colors.secondary};
  padding-bottom: 20;
`;

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
