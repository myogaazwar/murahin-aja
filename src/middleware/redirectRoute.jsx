import { Navigate } from 'react-router-dom';

const RedirectRoute = ({ children }) => {
  const isUserLoggedIn = localStorage.getItem('isLogin');

  if (isUserLoggedIn) {
    return <Navigate to='/' />;
  }

  return children;
};

export default RedirectRoute;
