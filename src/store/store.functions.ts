import { message } from 'antd';
import { User } from './store.types';

const login = async (values: User) => {
  try {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    if (data.error) {
      message.error('Username or password is incorrect');
      return { success: false };
    }
    return { ...data, success: true };
  } catch (error) {
    console.log('loginError', error);
    return { success: false };
  }
};

export { login };
