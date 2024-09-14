import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
