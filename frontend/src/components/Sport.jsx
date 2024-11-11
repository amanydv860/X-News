// src/components/Sport.jsx
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';
import { Link } from 'react-router-dom';

const Sport = () => {
  const [sportArticles, setSportArticles] = useState([]);

  useEffect(() => {
    const getSportNews = async () => {
      const sportNews = await fetchNews('sport'); // Fetch sport news by category
      const SportfilteredArticles = sportNews.filter(article => article.urlToImage); // Only keep articles with images
      setSportArticles(SportfilteredArticles);
    };
    getSportNews();
  }, []);

  return (
    <div className="sport p-5">
      <h1 className="text-2xl font-bold mb-4 text-center p-3">Sport News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sportArticles.length > 0 ? (
          sportArticles.map((article, index) => (
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
          <p>No sport articles found</p>
        )}
      </div>
    </div>
  );
};

export default Sport;