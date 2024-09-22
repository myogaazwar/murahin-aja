import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../main';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(userContext);

  const isUserLoggedIn = user || localStorage.getItem('user');

  if (!isUserLoggedIn) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
