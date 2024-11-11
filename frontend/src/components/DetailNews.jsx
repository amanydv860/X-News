import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DetailNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article; // Get the article data passed from another component
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (article) {
      setLoading(false); // Set loading to false once the article is available
    }
  }, [article]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <div className="detail-news p-12">
      <button 
        onClick={handleBackClick} 
        className="text-blue-500 mb-4 inline-block"
      >
       <ArrowBackIcon sx={{ color: 'black' }} />
      </button>
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-gray-500 text-sm">Published on {new Date(article.publishedAt).toLocaleDateString()}</p>
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="w-full h-96 object-cover my-4" 
        />
      )}
      <p className="text-lg">{article.content}</p>
      <p className="text-gray-500 text-sm">Published by {article.author || 'Unknown'}</p>
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline"
      >
        Read full article
      </a>
    </div>
  );
};

export default DetailNews;