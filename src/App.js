import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MarketplaceDeals from './MarketplaceDeals';
import NewsSection from './NewsSection';
import AboutUs from './about'; 

import ChatBot from './chatbot';
import WalletDashboard from './wallet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Service from './services';

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/wallet" element={<WalletDashboard />} />
          {/* Main Page Components */}
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <MarketplaceDeals />
                <Service />
                <NewsSection />
              </>
            } 
          />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </Router>
  );
};

export default App;
