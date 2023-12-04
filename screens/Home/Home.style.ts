import styled from "styled-components/native";

import { colors, paddingHorizontal } from "../../CONSTANTS";

const HabitEmojiSize: number = 35;

export const HomeWrapper = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const HomeHeader = styled.View`
  background-color: white;
  padding-left: ${paddingHorizontal};
  padding-right: ${paddingHorizontal};
  padding-top: 55;
  padding-bottom: 20;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20;
`;

export const HabitEmoji = styled.TouchableOpacity`
  width: ${HabitEmojiSize};
  height: ${HabitEmojiSize};
  position: relative;
  border-top-right-radius: ${HabitEmojiSize / 2};
  border-top-left-radius: ${HabitEmojiSize / 2};
  border-bottom-right-radius: ${HabitEmojiSize / 2};
  border-bottom-left-radius: ${HabitEmojiSize / 2};
  background-color: #ddf2fc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HabitsWrapper = styled.ScrollView`
  padding-left: ${paddingHorizontal - 10};
  padding-right: ${paddingHorizontal - 10};
`;
