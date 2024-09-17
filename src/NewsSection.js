import React from 'react';

const NewsSection = () => {
  const newsItems = [
    { title: 'Agricultural Reforms 2024', content: 'New reforms to help farmers increase yield and earnings.' },
    { title: 'Organic Farming Trends', content: 'The rise of organic farming in rural areas.' },
    { title: 'Tech in Agriculture', content: 'How technology is revolutionizing farming in India.' },
  ];

  return (
    <div style={{ padding: '50px', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4CAF50' }}>Latest News</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
        {newsItems.map((news, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#fff', width: '30%', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{news.title}</h3>
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
