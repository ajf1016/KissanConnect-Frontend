import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=be44eab465e141aa913c8200c743ee7a');
        setNewsItems(response.data.articles.slice(0, 8)); 
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', color: '#4CAF50' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: '#f44336' }}>Error loading news: {error.message}</p>;

  return (
    <div style={{ padding: '50px', backgroundColor: '#e8f5e9' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#388E3C' }}>Latest News</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {newsItems.map((news, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#4CAF50' }}>{news.title}</h3>
            <p style={{ color: '#555' }}>{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
////be44eab465e141aa913c8200c743ee7a