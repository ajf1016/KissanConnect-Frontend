import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/images/logo.png";
import Vector from "./assets/images/Vector.png";
import Vector1 from "./assets/images/Vector1.png";
import Vector2 from "./assets/images/Vector2.png";
import footerBg from "./assets/images/footerBg.png";

const Footer = () => {
  const navigate = useNavigate();
  
  const styles = {
    container: {
      backgroundColor: '#219653',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: '100%',
      flexWrap: 'wrap', // Ensures responsive layout
    },
    section: {
      flex: 1,
      padding: '16px',
      borderRight: '2px solid #000000',
      minWidth: '250px',  // Ensures minimum width
    },
    lastSection: {
      borderRight: 'none',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    logoText: {
      marginLeft: '16px',
    },
    logoHeading: {
      fontSize: '24px',
      color: '#ffffff',
      fontWeight: 'bold',
    },
    logoDescription: {
      fontSize: '16px',
      color: '#ffffff',
    },
    linkList: {
      listStyle: 'none',
      marginRight: '24px',
      padding: 0,
    },
    linkItem: {
      fontSize: '18px',
      color: '#ffffff',
      cursor: 'pointer',
      marginBottom: '8px',
    },
    linkItemBold: {
      fontSize: '18px',
      color: '#ffffff',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginBottom: '8px',
    },
    socialContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '16px',
    },
    socialIcon: {
      height: '35px',
      width: '35px',
      margin: '0 6px',
      cursor: 'pointer',
    },
    footerBg: {
      height: '119px',
      width: '120px',
    },
    footerText: {
      fontSize: '20px',
      color: '#ffffff',
      fontWeight: 'bold',
      marginTop: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.flexContainer}>
        <div style={styles.section}>
          <div
            style={styles.logoContainer}
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Kisan Connect Logo" style={{ height: '130px', width: '130px' }} />
            <div style={styles.logoText}>
              <h3 style={styles.logoHeading}>
                Kisan <br /> Connect
              </h3>
              <p style={styles.logoDescription}>
                Krishi Pradhaan Seva
              </p>
            </div>
          </div>
        </div>
        <div style={styles.section}>
          <div style={{ display: 'flex' }}>
            <ul style={styles.linkList}>
              <li
                style={styles.linkItemBold}
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                style={styles.linkItemBold}
                onClick={() => navigate("/market")}
              >
                Market
              </li>
            </ul>
            <ul style={styles.linkList}>
              <li
                style={styles.linkItemBold}
                onClick={() => navigate("/about")}
              >
                About Us
              </li>
              <li
                style={styles.linkItem}
                onClick={() => navigate("/help")}
              >
                Help Center
              </li>
              <li
                style={styles.linkItem}
                onClick={() => navigate("/dispute")}
              >
                Partner Dispute
              </li>
              <li
                style={styles.linkItem}
                onClick={() => navigate("/faqs")}
              >
                FAQs
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.section}>
          <h1 style={styles.footerText}>
            Give us a follow on social media
          </h1>
          <div style={styles.socialContainer}>
            <img
              src={Vector}
              alt="Social Media - Icon 1"
              style={styles.socialIcon}
              aria-label="Follow us on Social Media"
            />
            <img
              src={Vector1}
              alt="Social Media - Icon 2"
              style={styles.socialIcon}
            />
            <img
              src={Vector2}
              alt="Social Media - Icon 3"
              style={styles.socialIcon}
            />
          </div>
          <p style={styles.footerText}>
            Made by : <strong>Team DevClan</strong>
          </p>
        </div>
        <div style={{ ...styles.section, ...styles.lastSection }}>
          <img src={footerBg} alt="Ministry of Agriculture & Farmers Welfare Logo" style={styles.footerBg} />
          <h1 style={styles.footerText}>
            Ministry of Agriculture & Farmers Welfare
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
