import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import AIChatbot from './components/global/AiChatBot';

const Layout = () => { 
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      <Navbar isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      <main>
        <Outlet /> 
      </main>
      <Footer />
      {/* <AIChatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} /> */}
    </div>
  );
};

export default Layout;