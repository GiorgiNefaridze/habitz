import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { paddingHorizontal, colors } from "../../CONSTANTS";

const screenWidth: number = Dimensions.get("screen").width;

export const GenderWrapper = styled.View`
  width: ${screenWidth};
  row-gap: 20;
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
`;

export const GenderContainer = styled.TouchableOpacity<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10;
  border-top-right-radius: 10;
  border-top-left-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  background-color: white;
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 40;
  padding-right: 40;
  border-width: 1.5px;
  border-color: ${({ selected }) => (selected ? colors.primary : "white")};
`;
