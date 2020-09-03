import React, { useState } from "react";
import { Form, Input, Button, Checkbox, PageHeader, notification, Space } from "antd";
import Link from "next/link";
import { signInWithEmail, signInWithGoogle, auth } from "~/module/firebase";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const openNotificationWithIcon = (type, title, message) => {
    notification[type]({
      message: title,
      description:message,
    });
  };


  const signInWithPhone = (values) => {
   
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Login"
        subTitle="This is a subtitle"
      />
      <Form
        {...layout}
        name="basic"
        onFinish={(value) => signInWithEmailAndPasswordHandler(value)}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input name="email" onChange={(event) => onChangeHandler(event)} />
        </Form.Item>
        <Form.Item
          type="password"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            type="password"
            name="password"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
          <p className="text-center my-3">or</p>
          <Button type="primary" onClick={ loginWithGoogle } htmlType="button">
            Sign in with Google
          </Button>
          <p className="text-center my-3">
            Don't have an account?{" "}
            <a href="auth/signup" className="text-blue-500 hover:text-blue-600">
              Sign up here
            </a>{" "}
            <br />{" "}
            <a
              href="auth/password-reset"
              className="text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SigninWithPhone;
