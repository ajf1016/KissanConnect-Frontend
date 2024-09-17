import React from 'react';
import logo from './assets/images/logo.png'; 

const Footer = () => {
  return (
    <div style={{ padding: '30px', backgroundColor: '#4CAF50', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <img src={logo} alt="Kisan Connect Logo" style={{ height: '100px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Contact us: 1800-123-456</p>
        <p>Email: contact@kisanconnect.com</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a href="./assets/docs/privacy.html" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="./assets/docs/terms.html" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
      </div>
      <div>
        <input type="email" placeholder="Enter your email" style={{ padding: '8px', marginRight: '10px', borderRadius: '10px', border: 'none' }} />
        <button style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#4CAF50', border: 'none', borderRadius: '10px' }}>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
