import { useEffect } from "react";
import { loadAsync } from "expo-font";

import { Heading } from "./Text.style";
import { Text as TextType } from "./Types";

const Text = (props: TextType) => {
  const { text, shadows, ...styleProps } = props;

  useEffect(() => {
    (async () => {
      await loadAsync({
        Gabarito: require("../../assets/fonts/Gabarito-VariableFont_wght.ttf"),
      });
    })();
  }, []);

  return (
    <Heading
      style={[
        shadows && {
          shadowColor: "#000",
          textShadowOffset: {
            width: 0,
            height: 2,
          },
          textShadowRadius: 2.62,

          elevation: 1,
        },
        { fontFamily: "Gabarito" },
      ]}
      {...styleProps}
    >
      {text}
    </Heading>
  );
};

export default Text;
