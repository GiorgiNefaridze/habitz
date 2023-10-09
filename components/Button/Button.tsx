import { Button as ButtonType } from "./Types";

import { Btn } from "./Button.style";

const Button = (props: ButtonType) => {
  const { children, onPress, ...styleProps } = props;

  return (
    <Btn
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
      onPress={onPress}
      {...styleProps}
    >
      {children}
    </Btn>
  );
};

export default Button;
