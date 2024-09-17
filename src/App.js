
import React from 'react';
import Navbar from './navbar';
import HeroSection from './HeroSection';
import MarketplaceDeals from './MarketplaceDeals';
import NewsSection from './NewsSection';
import Footer from './Footer';
import './index.css'; 


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MarketplaceDeals />
      <NewsSection />
      <Footer />
    </div>
  );
};


export default App;
