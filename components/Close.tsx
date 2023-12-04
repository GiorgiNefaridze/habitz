import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

import Text from "./Text/Text";

type CloseType = (props: {
  handleClose: () => void;
  label: string;
}) => ReactNode;

const Close: CloseType = ({ handleClose, label }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        right: 10,
        top: 10,
        zIndex: 10,
      }}
      onPress={handleClose}
    >
      <Text color="black" fontSize={4} fontWeight={600} text={label} />
    </TouchableOpacity>
  );
};

export default Close;
