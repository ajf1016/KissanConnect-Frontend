import React from 'react';
import OfferCard from './OfferCard';

const OfferList = ({ offers }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OfferList;
