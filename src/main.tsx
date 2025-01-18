import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Services from './routes/Services';
import Pricing from './routes/Pricing';
import Contact from './routes/Contact';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);