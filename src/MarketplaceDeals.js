import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import wheat from './assets/images/wheat.png';
import rice from './assets/images/rice.png';
import corn from './assets/images/corn.png';
import barley from './assets/images/barley.png';
import cotton from './assets/images/cotton.png';
import potatoes from './assets/images/potatao.png'; // Fixed typo
import tomatoes from './assets/images/tomato.png'; // Fixed typo
import onions from './assets/images/onions.png';
import apples from './assets/images/apples.png';

const MarketplaceDeals = () => {
  const deals = [
    { crop: 'Wheat', quantity: '100 Kg', price: '₹2500', img: wheat },
    { crop: 'Rice', quantity: '150 Kg', price: '₹3000', img: rice },
    { crop: 'Corn', quantity: '200 Kg', price: '₹4000', img: corn },
    { crop: 'Barley', quantity: '120 Kg', price: '₹2200', img: barley },
    { crop: 'Cotton', quantity: '80 Kg', price: '₹2700', img: cotton },
    { crop: 'Potatoes', quantity: '50 Kg', price: '₹1500', img: potatoes },
    { crop: 'Tomatoes', quantity: '60 Kg', price: '₹1300', img: tomatoes },
    { crop: 'Onions', quantity: '110 Kg', price: '₹1800', img: onions },
    { crop: 'Apples', quantity: '75 Kg', price: '₹5000', img: apples }
  ];

  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const styles = {
    marketplace: {
      position: 'relative',
      padding: '50px',
      backgroundColor: '#e8f5e9',
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#4CAF50',
    },
    scrollButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '30px',
      color: '#4CAF50',
      zIndex: 2,
    },
    scrollLeft: {
      left: '10px',
    },
    scrollRight: {
      right: '10px',
    },
    dealsContainer: {
      display: 'flex',
      gap: '20px',
      overflowX: 'hidden',
      paddingBottom: '20px',
      scrollBehavior: 'smooth',
    },
    dealCard: {
      flex: '0 0 auto',
      border: '1px solid #ddd',
      padding: '20px',
      minWidth: '200px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effects
    },
    cropImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
    cropName: {
      fontSize: '18px',
      margin: '10px 0',
    },
    dealDetails: {
      marginBottom: '10px',
    },
    bidButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div id="marketplace" style={styles.marketplace}>
      <h2 style={styles.title}>Marketplace Featured Deals</h2>
      
      <button
        onClick={() => scroll(-300)}
        style={{ ...styles.scrollButton, ...styles.scrollLeft }}
        aria-label="Scroll Left"
      >
        <FaChevronLeft />
      </button>

      <div ref={scrollRef} style={styles.dealsContainer}>
        {deals.map((deal, index) => (
          <div
            key={index}
            style={styles.dealCard}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'; // Scale up
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // Increase shadow
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)'; // Scale back
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Reset shadow
            }}
          >
            <img src={deal.img} alt={deal.crop} style={styles.cropImage} />
            <h3 style={styles.cropName}>{deal.crop}</h3>
            <p style={styles.dealDetails}>Quantity: {deal.quantity}</p>
            <p style={styles.dealDetails}>Price: {deal.price}</p>
            <button style={styles.bidButton}>Bid Now</button>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll(300)}
        style={{ ...styles.scrollButton, ...styles.scrollRight }}
        aria-label="Scroll Right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default MarketplaceDeals;
