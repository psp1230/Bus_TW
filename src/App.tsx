import React from 'react';
import Router from './router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
