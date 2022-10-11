import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './components/Error/Error';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
