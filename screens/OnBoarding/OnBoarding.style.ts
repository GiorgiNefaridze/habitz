import styled from "styled-components/native";

import { colors, paddingHorizontal } from "../../CONSTANTS";

export const OnBoardingWrapper = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: space-evenly;
  padding-left: ${paddingHorizontal} + "px";
  padding-right: ${paddingHorizontal} + "px";
`;
