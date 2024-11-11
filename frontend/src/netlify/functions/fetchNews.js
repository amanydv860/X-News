// netlify/functions/fetchNews.js

const fetch = require('node-fetch');

exports.handler = async function (event) {
  // Parse query parameters
  const query = event.queryStringParameters.query || 'Apple';
  const sortBy = event.queryStringParameters.sortBy || 'popularity';

  // Calculate the "from" date as one day before today
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const fromDate = currentDate.toISOString().split('T')[0];

  // Construct the News API URL
  const url = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${process.env.VITE_NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Set CORS headers and return the news data
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify(data.articles),
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
};
