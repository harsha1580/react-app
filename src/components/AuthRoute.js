import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.loader.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default AuthGuard;
