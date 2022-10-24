import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import ErrorPage from '../components/Error/Error';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import About from '../pages/About/About';
import { ROUTER_CONSTANTS } from './router.constants';

const RouteHandler = () => {
  return (
    <div className={'router-container'}>
      <Routes>
        <Route
          path={ROUTER_CONSTANTS['/'].route}
          errorElement={<ErrorPage />}
        />
        <Route
          path={ROUTER_CONSTANTS['/about'].route}
          element={<About />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={ROUTER_CONSTANTS['/login'].route}
          element={<Login />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={ROUTER_CONSTANTS['/dashboard'].route}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          errorElement={<ErrorPage />}
        />
      </Routes>
    </div>
  );
};

export default RouteHandler;
