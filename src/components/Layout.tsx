import React from 'react';
import Sidebar from './Sidebar';
import WhatsAppButton from './WhatsAppButton';



import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <DarkModeButton/> */}
      
      
      <Sidebar />
      <motion.main 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-2 p-8 ml-64"
      >
        {children}
      </motion.main>
      <WhatsAppButton />
    </div>
  );
};

export default Layout;