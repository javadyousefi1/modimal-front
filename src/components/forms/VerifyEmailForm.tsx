import React from "react";
import { Flex, Input, Typography } from "antd";
import type { GetProp } from "antd";
import type { OTPProps } from "antd/es/input/OTP";

const VerifyEmailForm = () => {
  const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
    console.log('onChange:', text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };
  return (
    <>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
    </>
  );
};

export default VerifyEmailForm;
