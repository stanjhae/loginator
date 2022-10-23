import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './components/Error/Error';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import About from './pages/About/About';

const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} errorElement={<ErrorPage />} />
      <Route path="/about" element={<About />} errorElement={<ErrorPage />} />
      <Route path="/login" element={<Login />} errorElement={<ErrorPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        errorElement={<ErrorPage />}
      />
    </Routes>
  );
};

export default RouteHandler;
