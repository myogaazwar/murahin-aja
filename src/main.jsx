import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
