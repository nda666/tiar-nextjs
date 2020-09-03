import React, { useState } from "react";
import Head from "next/head";
import LoginContainer from "~/components/login-container";
import Link from "next/link";
import { generateUserDocument, auth } from "~/module/firebase";
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
import { withRouter } from 'next/router';


const SignUp = ({router}) => {
  const createUserWithEmailAndPasswordHandler = async (input) => {
    const { fullName, phoneNumber } = input;
    try {
      await auth
        .createUserWithEmailAndPassword(input.email, input.password)
        .then((result) => {
          const myURL = { url: "http://localhost:3000/" };
          result.user.sendEmailVerification(myURL).then((data) => {
            console.log("email", data);
          });
          result.user.updateProfile({
            displayName: user.nickname,
            fullName: fullName,
            phoneNumber: phoneNumber,
            photoURL: null,
          });
          auth.signOut();
          notification.success({
            message:
              "Sign Up Successfull, please check your email for activation",
            description: "",
          });
        });
    } catch (error) {
      notification.error({
        message: "Sign Up Fail",
        description: error.message,
      });
      console.log(error);
    }
  };
  const onBack = () => {
    router.push('/')
  }
  const onChangeHandler = (event) => {};

  return (
    <LoginContainer title="Sign Up" onBack={() => onBack()}>
      <Head>
        <title>Sign Up</title>
      </Head>
      
      <Form
        layout="vertical"
        name="basic"
        onFinish={(value) => createUserWithEmailAndPasswordHandler(value)}
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

        <Form.Item
          type="password"
          label="Re-type Password"
          name="passwordConf"
          rules={[
            {
              required: true,
              message: "Please re-type your password!",
            },
          ]}
        >
          <Input
            type="password"
            name="passwordConf"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>

        <Form.Item
          type="text"
          label="Your Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            type="text"
            name="fullName"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>

        <Form.Item
          type="text"
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            type="text"
            name="phoneNumber"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
};
export default withRouter(SignUp);
