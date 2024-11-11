export const fetchNews = async (query = 'Apple', sortBy = 'popularity') => {
  try {
    const url = `/.netlify/functions/fetchNews?query=${query}&sortBy=${sortBy}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
