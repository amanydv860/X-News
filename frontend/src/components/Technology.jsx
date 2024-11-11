// src/components/Technology.jsx
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';
import { Link } from 'react-router-dom';

const Technology = () => {
  const [technologyArticles, setTechnologyArticles] = useState([]);

  useEffect(() => {
    const getTechnologyNews = async () => {
      const technologyNews = await fetchNews('technology'); // Fetch technology news by category
      const technologyFilteredArticles = technologyNews.filter(article => article.urlToImage); // Only keep articles with images
      setTechnologyArticles(technologyFilteredArticles);
    };
    getTechnologyNews();
  }, []);

  return (
    <div className="technology p-5">
      <h1 className="text-2xl font-bold mb-4 text-center p-3">Technology News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technologyArticles.length > 0 ? (
          technologyArticles.map((article, index) => (
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
          <p>No technology articles with images found</p>
        )}
      </div>
    </div>
  );
};

export default Technology;