import React from 'react';
import heroImage from './assets/images/kisan.jpg';
import { FaChevronDown } from 'react-icons/fa'; // Import scroll down icon

const HeroSection = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh', // Full viewport height
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      color: '#fff',
      textAlign: 'center',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed' // Parallax effect
    }}>
      <div style={{
        zIndex: 1,
        padding: '20px',
        maxWidth: '800px',
        fontFamily: '"Arial", sans-serif', // Use a custom font if desired
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' // Text shadow for better readability
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          margin: '0',
          color: '#fff'
        }}>Welcome to Kisan Connect</h1>
        <p style={{
          fontSize: '1.5rem',
          margin: '20px 0',
          lineHeight: '1.6',
          color: '#ddd'
        }}>
          Kisan Connect bridges the gap between farmers and buyers, providing a safe and reliable marketplace for trading crops and produce. Empowering the agricultural community!
        </p>
      </div>
      {/* Scroll Icon with Breathing Animation */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        fontSize: '24px',
        color: '#fff',
        animation: 'breathing 2s ease-in-out infinite'
      }}>
        <FaChevronDown />
      </div>

      {/* Keyframes for breathing animation */}
      <style>
        {`
          @keyframes breathing {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
