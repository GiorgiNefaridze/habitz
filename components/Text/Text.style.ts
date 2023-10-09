import styled from "styled-components/native";

import { Text } from "./Types";

export const Heading = styled.Text<Text>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight ?? 30};
`;
