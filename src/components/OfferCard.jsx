import React, { useState } from 'react';

const OfferCard = ({ offer }) => {
  const [bidPlaced, setBidPlaced] = useState(false);

  const handlePlaceBid = () => {
    // Logic to place a bid (can be an API call)
    setBidPlaced(true);
    alert(`Bid placed on ${offer.cropName}`);
  };

  return (
    <div style={cardStyle}>
      <h2>{offer.cropName}</h2>
      <p><strong>Buyer:</strong> {offer.buyerName}</p>
      <p><strong>Quantity:</strong> {offer.quantity}</p>
      <p><strong>Price:</strong> {offer.price}</p>
      {bidPlaced ? (
        <button disabled style={buttonStyleDisabled}>Bid Placed</button>
      ) : (
        <button style={buttonStyle} onClick={handlePlaceBid}>Place Bid</button>
      )}
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  width: '250px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const buttonStyleDisabled = {
  backgroundColor: '#ccc',
  color: '#666',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
};

export default OfferCard;
