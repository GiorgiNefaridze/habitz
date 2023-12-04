import styled from "styled-components/native";

type PropType = {
  isPressed: boolean;
};

export const HabitElement = styled.TouchableOpacity<PropType>`
  height: 60;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10;
  margin-bottom: 15;
  border-top-right-radius: 13;
  border-top-left-radius: 13;
  border-bottom-right-radius: 13;
  border-bottom-left-radius: 13;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 15;
  border-width: 1px;
  border-color: #9b9ba1;
  background-color: ${({ isPressed }) => (isPressed ? "red" : "#ededed")};
`;

export const HabitElementContent = styled.TouchableOpacity`
  flex-direction: row;
  column-gap: 10;
`;
