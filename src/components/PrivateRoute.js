import { Navigate, Outlet } from 'react-router-dom';

const isLoggedIn = () => {
  return localStorage.getItem('token') !== null;
};

export const PrivateRoute = ({ children }) => {
  // Redirect to login if not logged in
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
