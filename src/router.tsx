import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import React from 'react';
import ErrorPage from './components/Error/Error';
import Dashboard from './pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
