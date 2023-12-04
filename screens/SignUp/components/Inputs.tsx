import { Dispatch, SetStateAction, memo } from "react";

import InputLabel from "../../../components/InputLabel";

type InputsType = {
  name: string;
  email: string;
  password: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
};

const Inputs = memo((props: InputsType) => {
  const { email, name, password, setEmail, setName, setPassword } = props;
  return (
    <>
      <InputLabel
        label="Name"
        placeholder="Enter your name"
        secure={false}
        type="default"
        value={name}
        valueSetter={setName}
      />
      <InputLabel
        label="Email"
        placeholder="Enter your email address"
        secure={false}
        type="email-address"
        value={email}
        valueSetter={setEmail}
      />
      <InputLabel
        label="Password"
        placeholder="Enter your password"
        secure={true}
        type="default"
        value={password}
        valueSetter={setPassword}
      />
    </>
  );
});

export default Inputs;
