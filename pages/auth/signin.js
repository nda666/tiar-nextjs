import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import LoginContainer from "~/components/login-container";
import { signInWithEmail, signInWithGoogle } from "~/module/firebase";

import {
  Avatar,
  Form,
  Input,
  Button,
  Checkbox,
  PageHeader,
  notification,
  Space,
} from "antd";

const SignIn = () => {
  const loginWithGoogle = () => {
    signInWithGoogle();
  };

  const signInWithEmailAndPasswordHandler = (values) => {
    signInWithEmail(values.email, values.password)
      .then((userData) => {
        if (!userData.user.emailVerified){
          notification["error"]({
            message: "Email not verified",
            description: 'Please check your email to verified your account',
          });
        }
      })
      .catch((error) => {
        notification["error"]({
          message: "Login Fail",
          description: error.message,
        });
      });
  };

  return (
    <LoginContainer title="Sign In">
      <Head>
        <title>Sign In</title>
      </Head>

      <Form
        layout="vertical"
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
          <Input name="email" />
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
          <Input.Password name="password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
          <p>or</p>
          <Button type="primary" onClick={loginWithGoogle} htmlType="button">
            Sign in with Google
          </Button>
          <p>
            Don't have an account? <Link href="auth/signup"><a>Sign up here</a></Link>
            <br />
            <Link href="auth/password-reset"><a>Forgot Password?</a></Link>
          </p>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
};

export default SignIn;
