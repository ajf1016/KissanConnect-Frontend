import React from 'react';
import walletIcon from './assets/images/wallet.png'; 

const WalletDashboard = () => {
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#ffffff', 
      color: '#2C6B2F', 
      padding: '20px',
    },
    walletSection: {
      flex: 1,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    balanceContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ffffff', // White background for the wallet section
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)', // Added shadow for emerging effect
      transition: 'transform 0.3s ease', // Smooth emerging effect
    },
    walletIcon: {
      width: '100px',
      height: '100px',
      marginBottom: '20px',
    },
    balanceText: {
      fontSize: '24px',
      color: '#2C6B2F',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    amount: {
      fontSize: '36px',
      color: '#000',
      fontWeight: 'bold',
    },
    verticalLine: {
      width: '2px',
      backgroundColor: '#000000',
      marginLeft: '20px',
      marginRight: '20px',
    },
    transactionSection: {
      flex: 1,
      padding: '20px',
    },
    tableContainer: {
      backgroundColor: '#ffffff', // White background for the table section
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)', // Added shadow for emerging effect
      transition: 'transform 0.3s ease', // Smooth emerging effect
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#2C6B2F', // Evergreen background for the table headers
      color: '#fff',
      textAlign: 'left',
      padding: '10px',
    },
    tableRow: {
      borderBottom: '1px solid #ddd',
    },
    tableCell: {
      padding: '10px',
      textAlign: 'left',
      color: '#000',
    },
    heading: {
      fontSize: '24px',
      color: '#2C6B2F',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
  };

  // Sample data for transactions (you can replace this with actual data)
  const transactions = [
    { id: '1', value: '₹500' },
    { id: '2', value: '₹1000' },
    { id: '3', value: '₹750' },
    { id: '4', value: '₹1200' },
  ];

  return (
    <div style={styles.container}>
      {/* Wallet Balance Section */}
      <div style={styles.walletSection}>
        <div style={styles.balanceContainer}>
          <img src={walletIcon} alt="Wallet" style={styles.walletIcon} />
          <p style={styles.balanceText}>Wallet Balance</p>
          <p style={styles.amount}>₹15,000</p>
        </div>
      </div>

      {/* Vertical Line to Separate the Sections */}
      <div style={styles.verticalLine}></div>

      {/* Transaction History Section */}
      <div style={styles.transactionSection}>
        <div style={styles.tableContainer}>
          <h2 style={styles.heading}>Transaction History</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>Value</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{transaction.id}</td>
                  <td style={styles.tableCell}>{transaction.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
