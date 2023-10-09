import { Heading } from "./Text.style";
import { Text as TextType } from "./Types";

const Text = (props: TextType) => {
  const { text, shadows, ...styleProps } = props;
  return (
    <Heading
      style={
        shadows && {
          shadowColor: "#000",
          textShadowOffset: {
            width: 0,
            height: 2,
          },
          textShadowRadius: 2.62,

          elevation: 1,
        }
      }
      {...styleProps}
    >
      {text}
    </Heading>
  );
};

export default Text;
