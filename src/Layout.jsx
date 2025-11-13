import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';

const Layout = () => { 
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;