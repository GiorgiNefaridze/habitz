import { Heading } from "./Text.style";
import { Text as TextType } from "./Types";

const Text = (props: TextType) => {
  const { text, ...styleProps } = props;
  return <Heading {...styleProps}>{text}</Heading>;
};

export default Text;
