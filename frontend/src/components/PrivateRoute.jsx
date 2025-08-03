import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>Loading...</p>;
  }
  return user ? <Component {...rest} /> : <Navigate to="/auth" />;
};
export default PrivateRoute;
