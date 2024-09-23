import React from "react";
import Serviceicon from "./assets/images/services.png"; // Placeholder image URL

const Service = () => {
  const styles = {
    container: {
      height: '50%', // Equivalent to `h-1/2`
      backgroundColor: '#639968', // Equivalent to `bg-evergreen`
      color: '#F5F5F5', // Equivalent to `bg-grey` (light grey color)
      marginTop: '12px', // Equivalent to `mt-3`
      padding: '36px', // Equivalent to `p-9`
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '36px', // Equivalent to `p-9`
    },
    heading: {
      fontSize: '2.25rem', // Equivalent to `text-4xl`
      marginTop: '8px', // Equivalent to `mt-2`
      fontWeight: 'bold', // Equivalent to `font-bold`
      margin: 'auto',
      color: '#F5F5F5', // Same color as paragraph
    },
    paragraph: {
      marginTop: '12px', // Equivalent to `mt-3`
      fontSize: '1.125rem', // Equivalent to `text-lg`
      fontWeight: '600', // Equivalent to `font-semibold`
      margin: 'auto',
      color: '#F5F5F5', // Ensure paragraph color is defined
    },
    image: {
      maxWidth: '80%', // Equivalent to `max-width: 80%`
      margin: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Our Services</h1>
        <br />
        <p style={styles.paragraph}>
          Following are the services that Krishi Sadhan market provides for
          Farmers:
        </p>
        <br />
        <img src={Serviceicon} style={styles.image} alt="Service" />
      </div>
    </div>
  );
};

export default Service;
