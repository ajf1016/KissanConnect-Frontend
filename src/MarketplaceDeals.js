import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons

const MarketplaceDeals = () => {
  // Define the 10 crop deals
  const deals = [
    { crop: 'Wheat', quantity: '100 Kg', price: '₹2500', img: 'https://via.placeholder.com/200?text=Wheat' },
    { crop: 'Rice', quantity: '150 Kg', price: '₹3000', img: 'https://via.placeholder.com/200?text=Rice' },
    { crop: 'Corn', quantity: '200 Kg', price: '₹4000', img: 'https://via.placeholder.com/200?text=Corn' },
    { crop: 'Barley', quantity: '120 Kg', price: '₹2200', img: 'https://via.placeholder.com/200?text=Barley' },
    { crop: 'Sugarcane', quantity: '90 Kg', price: '₹3500', img: 'https://via.placeholder.com/200?text=Sugarcane' },
    { crop: 'Cotton', quantity: '80 Kg', price: '₹2700', img: 'https://via.placeholder.com/200?text=Cotton' },
    { crop: 'Potatoes', quantity: '50 Kg', price: '₹1500', img: 'https://via.placeholder.com/200?text=Potatoes' },
    { crop: 'Tomatoes', quantity: '60 Kg', price: '₹1300', img: 'https://via.placeholder.com/200?text=Tomatoes' },
    { crop: 'Onions', quantity: '110 Kg', price: '₹1800', img: 'https://via.placeholder.com/200?text=Onions' },
    { crop: 'Apples', quantity: '75 Kg', price: '₹5000', img: 'https://via.placeholder.com/200?text=Apples' }
  ];

  const scrollRef = useRef(null); // Ref to the scrollable container

  // Scroll function
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div id="marketplace" style={{ position: 'relative', padding: '50px', backgroundColor: '#e8f5e9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4CAF50' }}>Marketplace Featured Deals</h2>
      
      {/* Arrow on the left side */}
      <button
        onClick={() => scroll(-300)} // Scroll left by 300px
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '30px',
          color: '#4CAF50',
          zIndex: 2,
        }}
        aria-label="Scroll Left"
      >
        <FaChevronLeft />
      </button>

      {/* Deals container with horizontal scroll */}
      <div
        ref={scrollRef} // Attach the ref to the div
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'hidden',
          paddingBottom: '20px',
          scrollBehavior: 'smooth',
        }}
      >
        {deals.map((deal, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              border: '1px solid #ddd',
              padding: '20px',
              minWidth: '200px',
              backgroundColor: '#fff',
              borderRadius: '10px',
            }}
          >
            <img src={deal.img} alt={deal.crop} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{deal.crop}</h3>
            <p>Quantity: {deal.quantity}</p>
            <p>Price: {deal.price}</p>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Bid Now
            </button>
          </div>
        ))}
      </div>

      {/* Arrow on the right side */}
      <button
        onClick={() => scroll(300)} // Scroll right by 300px
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '30px',
          color: '#4CAF50',
          zIndex: 2,
        }}
        aria-label="Scroll Right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default MarketplaceDeals;
