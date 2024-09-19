import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MarketplaceDeals from './MarketplaceDeals';
import NewsSection from './NewsSection';
import AboutUs from './about';
import ChatBot from './chatbot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Service from './services';
import WalletDashboard from './wallet';

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
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </Router>
  );
};

export default App;
