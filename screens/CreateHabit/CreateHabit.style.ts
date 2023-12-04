import styled from "styled-components/native";

import { screenWidth } from "../SignUp/SignUp";
import { colors, paddingHorizontal } from "../../CONSTANTS";

export const CreateHabitWrapper = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const HabitHeader = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 10;
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
  padding-top: 55;
  padding-bottom: 25;
  border-bottom-width: 2;
  border-bottom-style: solid;
  border-bottom-color: #eaecf0;
  background-color: white;
`;

export const ListWrapper = styled.View`
  row-gap: 10;
  margin-top: ${paddingHorizontal};
  margin-bottom: ${paddingHorizontal};
`;

export const HabitBody = styled.View`
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
  margin-bottom: ${paddingHorizontal};
`;

export const HabitEmojipickerWrapper = styled.TouchableOpacity`
  width: ${screenWidth - 2 * paddingHorizontal};
  height: 65;
  background-color: white;
  border-top-right-radius: 10;
  border-top-left-radius: 10;
  border-bottom-right-radius: 10;
  border-bottom-left-radius: 10;
  margin-top: 30;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10;
  padding-right: 10;
`;

export const SelectIcon = styled.TouchableOpacity<{ isList: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60;
  height: 53;
  margin-left: 10;
  margin-right: 10;
  border-top-right-radius: 15;
  border-top-left-radius: 15;
  border-bottom-right-radius: 15;
  border-bottom-left-radius: 15;
  border-width: 1px;
  border-color: grey;
  border-style: solid;
  margin-bottom: ${({ isList }) => (isList ? 15 : 0)};
`;

export const BottomSheetContent = styled.View`
  width: ${screenWidth - 2 * paddingHorizontal};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 70;
`;
