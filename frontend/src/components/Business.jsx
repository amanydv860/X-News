// src/components/Business.jsx
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';
import { Link } from 'react-router-dom';

const Business = () => {
  const [businessArticles, setBusinessArticles] = useState([]);

  useEffect(() => {
    const getBusinessNews = async () => {
      const businessNews = await fetchNews('business'); // Fetch business news by category
      const businessFilteredArticles = businessNews.filter(article => article.urlToImage); // Only keep articles with images
      setBusinessArticles(businessFilteredArticles);
    };
    getBusinessNews();
  }, []);

  return (
    <div className="business p-5">
      <h1 className="text-2xl font-bold mb-4 text-center p-3">Business News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {businessArticles.length > 0 ? (
          businessArticles.map((article, index) => (
            <Link 
              key={index} 
              to={`/detail/${index}`} 
              state={{ article }} // Passing the article data to the DetailNews component
            >
              <div className="news-item p-4 border rounded-lg shadow-sm">
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  className="w-full h-48 object-cover mb-2" 
                />
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-sm text-gray-500">Published on {new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No business articles with images found</p>
        )}
      </div>
    </div>
  );
};

export default Business;