import React from 'react';

const MarketplaceDeals = () => {
  const deals = [
    { crop: 'Wheat', quantity: '100 Kg', price: '₹2500', img: 'https://via.placeholder.com/200?text=Wheat' },
    { crop: 'Rice', quantity: '150 Kg', price: '₹3000', img: 'https://via.placeholder.com/200?text=Rice' },
    { crop: 'Corn', quantity: '200 Kg', price: '₹4000', img: 'https://via.placeholder.com/200?text=Corn' },
  ];

  return (
    <div style={{ padding: '50px', backgroundColor: '#e8f5e9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4CAF50' }}>Marketplace Featured Deals</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '20px' }}>
        {deals.map((deal, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '20px', minWidth: '200px', backgroundColor: '#fff', borderRadius: '10px' }}>
            <img src={deal.img} alt={deal.crop} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{deal.crop}</h3>
            <p>Quantity: {deal.quantity}</p>
            <p>Price: {deal.price}</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }}>Bid Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceDeals;
