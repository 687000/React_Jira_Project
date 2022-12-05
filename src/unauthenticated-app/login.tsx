import { Settings } from "http2";
import React, { FormEvent } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <>
      <Form name="basic" onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name={"username"}
          rules={[{ required: true, message: "Please enter the user name" }]}
        >
          <Input placeholder={"username"} type={"text"} id={"username"} />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[{ required: true, message: "Please enter the password" }]}
        >
          <Input placeholder={"password"} type={"password"} id={"password"} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
