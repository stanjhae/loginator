import { message } from 'antd';
import { User } from './store.types';
import AuthState from './store';

const isAppReady = () => {
  const token = localStorage.getItem('token') || '';
  const email = localStorage.getItem('email') || '';

  AuthState.token = token;
  AuthState.email = email;
  AuthState.isLoggedIn = !!token;

  return true;
};

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

    AuthState.token = data.token;
    AuthState.email = values.email;

    localStorage.setItem('token', data.token);
    localStorage.setItem('email', values.email);

    return { success: true };
  } catch (error) {

    console.log('loginError', error);
    return { success: false };
  }
};

export { login, isAppReady };
