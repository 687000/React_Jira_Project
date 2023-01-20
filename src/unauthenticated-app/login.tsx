import { Settings } from "http2";
import React, { FormEvent } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";
import { useDispatch } from "react-redux";
export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login, user } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const dispatch = useDispatch();
  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    // dispatch(loginThunk(values))
    try {
      await run(login(values));
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
        <Form.Item>
          <LongButton loading={isLoading} type="primary" htmlType="submit">
            Login
          </LongButton>
        </Form.Item>
      </Form>
    </>
  );
};
