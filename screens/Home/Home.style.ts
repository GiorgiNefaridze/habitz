import styled from "styled-components/native";

import { colors, paddingHorizontal } from "../../CONSTANTS";

export const HomeWrapper = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const HomeHeader = styled.View`
  background-color: white;
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
  padding-top: 55;
  padding-bottom: 15;
  flex-direction: row;
`;
