import React from "react";
 

const AboutUs = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Ensure the container takes full viewport height
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    },
    teamSectionContainer: {
      marginBottom: '40px',
      backgroundColor: '#e8f5e9',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    teamSectionHeader: {
      textAlign: 'center',
      color: '#2E7D32',
      marginBottom: '20px',
      fontSize: '28px',
      fontWeight: 'bold'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
      justifyContent: 'center'
    },
    teamMember: {
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    teamImageContainer: {
      marginBottom: '10px'
    },
    teamImage: {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      objectFit: 'cover'
    },
    aboutSectionContainer: {
      marginBottom: '40px',
      backgroundColor: '#fafafa',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    aboutSectionHeader: {
      color: '#2E7D32',
      marginBottom: '15px',
      fontSize: '28px',
      fontWeight: 'bold'
    },
    aboutDetails: {
      lineHeight: '1.6',
      fontSize: '16px'
    },
 
  };

  return (
    <div style={styles.container}>
      

      {/* Team Section */}
      <section style={styles.teamSectionContainer}>
        <h2 style={styles.teamSectionHeader}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          {/* Team Member */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} style={styles.teamMember}>
              <div style={styles.teamImageContainer}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  style={styles.teamImage}
                />
              </div>
              <h3>Member Name</h3>
              <p className="team-role">Role</p>
              <p className="team-registration">Registration Number</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSectionContainer}>
        <h2 style={styles.aboutSectionHeader}>About Us</h2>
        <div style={styles.aboutDetails}>
          <h3>Problem Statement</h3>
          <p>
            a) Farmers frequently encounter significant uncertainties in accessing markets,
            leading to unstable and fluctuating incomes. <br />
            b) Instability is compounded by excessive rainfall, droughts, floods, and other
            natural calamities, damaging crops. <br />
            c) Farmers not only lose their expected harvest but also suffer financial losses,
            making it difficult to sustain livelihoods. <br />
            d) These unpredictable factors contribute to a cycle of economic vulnerability,
            where farmers struggle to recover and secure a reliable income.
          </p>

          <h3>Solution</h3>
          <p>
            a) Contract farming provides stability with guaranteed buyers.<br />
            b) A platform facilitates contract farming agreements.<br />
            c) Escrow accounts protect both farmers and buyers against fraud.<br />
            d) The platform ensures secure contracts, communication, and payments.<br />
            e) A marketplace connects farmers and buyers, offering blockchain-based contract
            management.<br />
            f) A rating system reduces market risks for farmers and buyers.
          </p>

          <h3>Outcome</h3>
          <ul>
            <li>Income Stability: Payments secured through escrow reduce uncertainty.</li>
            <li>Market Access: Broader reach to local, national, and international buyers.</li>
            <li>Risk Management: Rating systems and advisory services help farmers.</li>
            <li>Efficiency: Automation of contracts and payments saves time and resources.</li>
            <li>Economic Empowerment: Transparent systems enable better negotiations.</li>
          </ul>
        </div>
      </section>

     
    </div>
  );
};

export default AboutUs;
