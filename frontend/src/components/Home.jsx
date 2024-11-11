import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';
import { Link } from 'react-router-dom';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsArticles = await fetchNews(); // Fetch headlines
      const filteredArticles = newsArticles.filter(article => article.urlToImage); // Only keep articles with images
      setArticles(filteredArticles);
    };
    getNews();
  }, []);

  return (
    <div className="home p-5">
      <h1 className="text-2xl font-bold mb-4 text-center p-3">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Link key={index} to={`/detail/${index}`} state={{ article }}>
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
          <p>No articles with images found</p>
        )}
      </div>
    </div>
  );
};

export default Home;