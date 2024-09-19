import React from 'react';
import heroImage from './assets/images/hero.png'; // Full-width hero image

const HeroSection = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundColor: '#f5f5f5', // Light lime green background
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'contain', // Ensures the image fits within the container
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', // Avoids tiling the image
    }}>
    </div>
  );
};

export default HeroSection;
