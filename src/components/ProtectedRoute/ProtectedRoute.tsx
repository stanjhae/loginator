import React, { FC, ReactElement } from 'react';
import { view } from '@risingstack/react-easy-state';
import { Navigate } from 'react-router-dom';
import AuthState from '../../store/store';

const ProtectedRoute: FC<{ children: ReactElement }> = ({ children }) => {
  if (!AuthState.isLoggedIn) {
    return <Navigate to={'/login'} />;
  }

  return children;
};

export default view(ProtectedRoute);
