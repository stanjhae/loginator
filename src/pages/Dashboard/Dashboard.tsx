import React from 'react';
import { view } from '@risingstack/react-easy-state';
import AppStore from '../../store/store';

const Dashboard: React.FC = () => {
  const { email } = AppStore;

  return <h1>Hello {email}</h1>;
};

export default view(Dashboard);
