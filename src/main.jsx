import { createContext, StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import ProtectedRoute from './middleware/protectedRoute';
import RedirectRoute from './middleware/redirectRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: (
      <RedirectRoute>
        <RegisterPage />
      </RedirectRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RedirectRoute>
        <LoginPage />
      </RedirectRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
]);

export const userContext = createContext();
export const loginContext = createContext();

const App = () => {
  const [user, setUser] = useState();

  return (
    <userContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
