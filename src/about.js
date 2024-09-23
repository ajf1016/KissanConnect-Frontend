import React from "react";
import faiz from "./assets/images/faiz.jpeg";
import k from "./assets/images/k.jpg";
import vk from "./assets/images/vk.jpg";
import ki from "./assets/images/ki.jpg";
import me from "./assets/images/me.jpg";
import bk from "./assets/images/bk.jpeg";

const AboutUs = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
      backgroundColor: '#f7f3e9' // Soft beige for a natural, earthy background
    },
    teamSectionContainer: {
      marginBottom: '40px',
      backgroundColor: '#f4f4f4', // Light beige section background
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    teamSectionHeader: {
      textAlign: 'center',
      color: '#2C5E1A', // Dark green for text
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
      backgroundColor: '#fff', // White for contrast against the beige
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      animation: 'pop 0.5s ease-in-out', // Adding animation
      transform: 'translateY(0)', // Start position
      transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover
    },
    teamMemberHover: {
      transform: 'scale(1.05)', // Scale up on hover
      boxShadow: '0 6px 12px rgba(0,0,0,0.2)', // Slightly bigger shadow
    },
    teamImageContainer: {
      marginBottom: '10px'
    },
    teamImage: {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      border: '4px solid #2C5E1A' // Dark green border around images for emphasis
    },
    aboutSectionContainer: {
      marginBottom: '40px',
      backgroundColor: '#fff', // White for contrast
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    aboutSectionHeader: {
      color: '#2C5E1A', // Dark green for headers
      marginBottom: '15px',
      fontSize: '28px',
      fontWeight: 'bold'
    },
    aboutDetails: {
      lineHeight: '1.6',
      fontSize: '16px',
      color: '#5F5F5F' // Soft gray for readable body text
    },
    listItem: {
      margin: '10px 0',
      color: '#3D3D3D' // Darker shade for the outcome list
    },
  };

  // Array of team members with images, names, roles, and registration numbers
  const teamMembers = [
    { name: 'Bramhank Mishra', role: 'Team Leader', registration: '1203450', image: bk },
    { name: 'Md Ajmal Fayiz', role: 'Backend-Developer', registration: '12203447', image: faiz },
    { name: 'Kaushik Raj', role: 'Intern', registration: '12203450', image: k },
     { name: 'Vaibhav Kulshrestha', role: 'Frontend-Developer', registration: '12314448', image: me },
     { name: 'Vashundra kumari', role: 'Ui-Designer', registration: '12201815', image: vk },
    { name: 'Khushi', role: 'Designer', registration: '12316381', image: ki }
    ];

  return (
    <div style={styles.container}>
      {/* Team Section */}
      <section style={styles.teamSectionContainer}>
        <h2 style={styles.teamSectionHeader}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{ 
                ...styles.teamMember,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={styles.teamImageContainer}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={styles.teamImage}
                />
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-registration">{member.registration}</p>
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
            <li style={styles.listItem}>Income Stability: Payments secured through escrow reduce uncertainty.</li>
            <li style={styles.listItem}>Market Access: Broader reach to local, national, and international buyers.</li>
            <li style={styles.listItem}>Risk Management: Rating systems and advisory services help farmers.</li>
            <li style={styles.listItem}>Efficiency: Automation of contracts and payments saves time and resources.</li>
            <li style={styles.listItem}>Economic Empowerment: Transparent systems enable better negotiations.</li>
          </ul>
        </div>
      </section>

      <style>
        {`
          @keyframes pop {
            0% {
              transform: scale(0.5);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
