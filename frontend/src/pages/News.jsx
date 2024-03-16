// News.jsx
import { useEffect, useState } from "react";
import { NewsCard } from "../components/NewsCard";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=blockchain&q=crypto&language=en&sortBy=popularity&pageSize=10&page=1&apiKey=79b953060c674330b0ccc948ff6cdd0e"
        );
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className="p-8">
        <p>&lt;</p>
        <h1 className="text-3xl flex justify-center">Top Crypto News</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {newsData.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </>
  );
};

export default News;
