import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Element {...rest} />
        ) : (
          <Navigate to={{ pathname: '/login', state: { from: rest.location } }} replace />
        )
      }
    />
  );
};

export default PrivateRoute;
