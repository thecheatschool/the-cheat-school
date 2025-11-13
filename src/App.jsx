import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Events from './pages/EventsPage';
import Gallery from './pages/GalleryPage'; 
import ContactUs from './pages/ContactUsPage';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />, 
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/contact us',
        element: <ContactUs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;