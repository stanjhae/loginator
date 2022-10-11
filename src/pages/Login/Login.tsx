import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/store.functions';
import { User } from '../../store/store.types';
import { view } from '@risingstack/react-easy-state';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: User) => {
    const data = await login(values);
    if (data.success) {
      navigate('/dashboard', { replace: true });
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default view(Login);
