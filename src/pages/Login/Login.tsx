import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/store.functions';
import { User } from '../../store/store.types';
import { view } from '@risingstack/react-easy-state';
import './login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: User) => {
    const data = await login(values);
    if (data.success) {
      navigate('/dashboard', { replace: true });
    }
  };

  return (
    <div className={'login-container'}>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Password should be at least 6 characters.',
              min: 6,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default view(Login);
