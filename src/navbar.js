import React, { useState } from 'react';
import logo from './assets/images/logo.png'; // Ensure this path is correct

const Navbar = () => {
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 30px', // Removed top and bottom padding to keep height fixed
      backgroundColor: '#2E7D32', // Updated to a metallic green
      borderRadius: '15px', // Rounded corners
      height: '70px', // Fixed height for the navbar
    }}>
      {/* Left: Logo */}
      <div style={{
        height: '100%', // Make sure this div takes up the full height of the navbar
        display: 'flex',
        alignItems: 'center' // Vertically align the logo in the navbar
      }}>
        <img
          src={logo}
          alt="Kisan Connect Logo"
          style={{ height: '100px', borderRadius: '10px' }} // Fixed logo height
        />
      </div>

      {/* Middle: Navigation Links */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        color: '#fff',
        height: '100%' // Make sure this div takes up the full height of the navbar
      }}>
        <a href="#home" style={{
          textDecoration: 'none',
          color: 'white',
          position: 'relative',
          padding: '10px 0',
          transition: 'color 0.3s ease',
        }}
          onMouseOver={(e) => { e.target.style.color = '#4CAF50'; }}
          onMouseOut={(e) => { e.target.style.color = 'white'; }}
        >
          Home
        </a>
        
        <a href="#about" style={{
          textDecoration: 'none',
          color: 'white',
          position: 'relative',
          padding: '10px 0',
          transition: 'color 0.3s ease',
        }}
          onMouseOver={(e) => { e.target.style.color = '#4CAF50'; }}
          onMouseOut={(e) => { e.target.style.color = 'white'; }}
        >
          About us
        </a>

        <a href="#marketplace" style={{
          textDecoration: 'none',
          color: 'white',
          position: 'relative',
          padding: '10px 0',
          transition: 'color 0.3s ease',
        }}
          onMouseOver={(e) => { e.target.style.color = '#4CAF50'; }}
          onMouseOut={(e) => { e.target.style.color = 'white'; }}
        >
          Marketplace
        </a>
      </div>

      {/* Right: Profile Dropdown */}
      <div style={{ position: 'relative', display: 'inline-block', height: '100%' }}>
        <button
          onClick={toggleProfile}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            height: '100%' // Ensure the button stays aligned with the navbar height
          }}
        >
          <img
            src="https://via.placeholder.com/30" // Placeholder profile icon
            alt="Profile Icon"
            style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '8px' }}
          />
          Profile ▼
        </button>
        {profileVisible && (
          <div style={{
            position: 'absolute',
            right: 0,
            backgroundColor: '#fff',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            zIndex: 1,
            width: '250px',
            borderRadius: '10px',
            padding: '15px'
          }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '18px', color: '#333' }}>Farmer Name</h3>
            <p><strong>Address:</strong> Farmer Address</p>
            <p><strong>Aadhaar Number:</strong> 1234-5678-9101</p>
            <p><strong>Mobile Number:</strong> +91-123-456-7890</p>
            <button style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px',
              width: '100%',
              cursor: 'pointer'
            }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
