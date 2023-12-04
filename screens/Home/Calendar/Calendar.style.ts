import styled from "styled-components/native";

import { colors } from "../../../CONSTANTS";

type PropType = {
  currentDay: boolean;
};

export const DateBlock = styled.TouchableOpacity<PropType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10;
  background-color: white;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 11;
  padding-left: 11;
  border-top-right-radius: 15;
  border-top-left-radius: 15;
  border-bottom-right-radius: 15;
  border-bottom-left-radius: 15;
  border-width: ${({ currentDay }) => (currentDay ? "2px" : "1px")};
  border-style: solid;
  border-color: ${({ currentDay }) => (currentDay ? colors.primary : "grey")};
  margin-left: 15;
`;
