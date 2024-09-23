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
      backgroundColor: '#ffffff',
      padding: '50px',
      borderRadius: '8px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
      height: '300px', // Increased height
      transition: 'transform 0.3s ease',
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
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
    },
    button: {
      padding: '12px 25px',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)', // Glossiness
      border: 'none',
    },
    addMoneyButton: {
      backgroundColor: '#28a745',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', // Glossy effect
    },
    withdrawButton: {
      backgroundColor: '#dc3545',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)', // Glossy effect
    },
    buttonHover: {
      transform: 'translateY(-3px)', // Lifted on hover
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
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
      height: '300px', // Increased height for balance
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#2C6B2F',
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
    statusButton: {
      padding: '5px 10px',
      borderRadius: '5px',
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      minWidth: '100px',
      textAlign: 'center',
      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(0,0,0,0.1)',
    },
    statusSuccess: {
      background: 'linear-gradient(145deg, #28a745, #4cd964)',
    },
    statusFailed: {
      background: 'linear-gradient(145deg, #dc3545, #f05454)',
    },
    statusOngoing: {
      background: 'linear-gradient(145deg, #ffc107, #ffcd38)',
    },
    heading: {
      fontSize: '24px',
      color: '#2C6B2F',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    dateTime: {
      display: 'inline-block',
      color: '#000',
    },
  };

  // Sample data for transactions (you can replace this with actual data)
  const transactions = [
    { id: '1', value: '₹500', date: '2024-09-23', time: '12:30 PM', status: 'success' },
    { id: '2', value: '₹1000', date: '2024-09-22', time: '11:45 AM', status: 'failed' },
    { id: '3', value: '₹750', date: '2024-09-21', time: '09:20 AM', status: 'ongoing' },
    { id: '4', value: '₹1200', date: '2024-09-20', time: '03:15 PM', status: 'success' },
  ];

  // Function to get the button style based on status
  const getStatusStyle = (status) => {
    switch (status) {
      case 'success':
        return { ...styles.statusButton, ...styles.statusSuccess };
      case 'failed':
        return { ...styles.statusButton, ...styles.statusFailed };
      case 'ongoing':
        return { ...styles.statusButton, ...styles.statusOngoing };
      default:
        return styles.statusButton;
    }
  };

  return (
    <div style={styles.container}>
      {/* Wallet Balance Section */}
      <div style={styles.walletSection}>
        <div style={styles.balanceContainer}>
          <img src={walletIcon} alt="Wallet" style={styles.walletIcon} />
          <p style={styles.balanceText}>Wallet Balance</p>
          <p style={styles.amount}>₹15,000</p>

          {/* Buttons for Adding Money and Withdrawing */}
          <div style={styles.buttonGroup}>
            <button
              style={styles.addMoneyButton}
              onMouseOver={(e) => (e.target.style.transform = styles.buttonHover.transform)}
              onMouseOut={(e) => (e.target.style.transform = 'none')}
              onClick={() => alert('Add Money from UPI clicked')}
            >
              Add Amount
            </button>
            <button
              style={styles.withdrawButton}
              onMouseOver={(e) => (e.target.style.transform = styles.buttonHover.transform)}
              onMouseOut={(e) => (e.target.style.transform = 'none')}
              onClick={() => alert('Withdraw clicked')}
            >
              Withdraw
            </button>
          </div>
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
                <th style={styles.tableHeader}>Date & Time</th>
                <th style={styles.tableHeader}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{transaction.id}</td>
                  <td style={styles.tableCell}>{transaction.value}</td>
                  <td style={styles.tableCell}>
                    <span style={styles.dateTime}>
                      {transaction.date} {transaction.time}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <span style={getStatusStyle(transaction.status)}>
                      {transaction.status}
                    </span>
                  </td>
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
