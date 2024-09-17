import React, { useState } from 'react';
import OfferList from './components/OfferList';

const App = () => {
  // Sample offers data
  const offers = [
    { id: 1, buyerName: 'John Doe', cropName: 'Wheat', quantity: '100kg', price: '₹1500' },
    { id: 2, buyerName: 'Jane Smith', cropName: 'Rice', quantity: '200kg', price: '₹2200' },
    { id: 3, buyerName: 'Amit Kumar', cropName: 'Corn', quantity: '50kg', price: '₹800' },
    // Add more offers as needed
  ];

  return (
    <div>
      <h1>Marketplace Offers</h1>
      <OfferList offers={offers} />
    </div>
  );
};

export default App;
