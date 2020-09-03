import React, { useState } from "react";
import Link from 'next/link'
import LoginContainer from "~/components/login-container";
import { withRouter } from 'next/router';
import { auth } from '~/module/firebase';
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

const PasswordReset = ({router}) => {
  const onBack = () => {
    router.push('/')
  }
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = value => {
    auth.sendPasswordResetEmail(value.email).then(
      notification.success({
        description: 'Please check your email',
        message: 'Success'
      })
    ).catch(error => {
      console.log(error)
      notification.error({
        description: 'Something happen',
        message: 'Error'
      })
    })
  };
  return (
    <LoginContainer title="Forget Password" onBack={onBack}>
   
   <Form
        layout="vertical"
        name="basic"
        onFinish={(value) => sendResetEmail(value)}
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
      
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Me a Reset Link
          </Button>
        </Form.Item>
      </Form>
    
        
        </LoginContainer>
  );
};
export default withRouter(PasswordReset);