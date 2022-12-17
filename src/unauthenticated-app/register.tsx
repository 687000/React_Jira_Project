import { Settings } from "http2";
import React, { FormEvent } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";
export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register, user } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error("Please make sure your passwords match"));
      return;
    }
    try {
      await run(register(values));
    } catch (e: any) {
      onError(e);
    }
  };
  return (
    <>
      <Form name="basic" onFinish={handleSubmit}>
        <Form.Item
          name={"username"}
          rules={[{ required: true, message: "Please enter the user name" }]}
        >
          <Input placeholder={"username"} type={"text"} id={"username"} />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "Please enter the password" }]}
        >
          <Input placeholder={"password"} type={"password"} id={"password"} />
        </Form.Item>
        <Form.Item
          name={"cpassword"}
          rules={[{ required: true, message: "Please confirm the password" }]}
        >
          <Input
            placeholder={"confirm password"}
            type={"password"}
            id={"cpassword"}
          />
        </Form.Item>
        <Form.Item>
          <LongButton loading={isLoading} type="primary" htmlType="submit">
            Register
          </LongButton>
        </Form.Item>
      </Form>
    </>
  );
};
