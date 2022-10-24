import React, { FC, ReactElement } from 'react';
import { view } from '@risingstack/react-easy-state';
import { Navigate } from 'react-router-dom';
import AppStore from '../../store/store';

const ProtectedRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const { isLoggedIn } = AppStore;

  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace />;
  }

  return children;
};

export default view(ProtectedRoute);
