// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './assets/images/logo.png'; // Ensure this path is correct

const Navbar = () => {
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 30px',
      backgroundColor: '#2E7D32',
      borderRadius: '15px',
      height: '70px',
    }}>
      {/* Left: Logo */}
      <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <img
            src={logo}
            alt="Kisan Connect Logo"
            style={{ height: '100px', borderRadius: '10px' }}
          />
        </Link>
      </div>

      {/* Middle: Navigation Links */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        color: '#fff',
        height: '100%'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: 'white',
          padding: '10px 0',
          transition: 'color 0.3s ease',
        }}
          onMouseOver={(e) => { e.target.style.color = '#FFA500'; }}
          onMouseOut={(e) => { e.target.style.color = 'white'; }}
        >
          Home
        </Link>

        <Link to="/about" style={{
          textDecoration: 'none',
          color: 'white',
          padding: '10px 0',
          transition: 'color 0.3s ease',
        }}
          onMouseOver={(e) => { e.target.style.color = '#FFA500'; }}
          onMouseOut={(e) => { e.target.style.color = 'white'; }}
        >
          About Us
        </Link>

        <Link to="#marketplace" style={{
          textDecoration: 'none',
          color: 'white',
          padding: '10px 0',
          transition: 'color 0.3s ease',
        }}
          onMouseOver={(e) => { e.target.style.color = '#FFA500'; }}
          onMouseOut={(e) => { e.target.style.color = 'white'; }}
        >
          Marketplace
        </Link>

        <Link to="/wallet" style={{
          textDecoration: 'none',
          color: 'white',
          padding: '10px 0',
          transition: 'color 0.3s ease',
        }}
          onMouseOver={(e) => { e.target.style.color = '#FFA500'; }}
          onMouseOut={(e) => { e.target.style.color = 'white'; }}
        >
          Wallet
        </Link>

      </div>

      {/* Right: Profile and Google Translate */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/* Language Conversion Button */}
        <div id="google_translate_element" style={{
          marginRight: '20px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          cursor: 'pointer'
        }}></div>

        {/* Profile Dropdown */}
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
              height: '100%'
            }}
          >
            <img
              src="https://via.placeholder.com/30"
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
      </div>
    </header>
  );
};

export default Navbar;
