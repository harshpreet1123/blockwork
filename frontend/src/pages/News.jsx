import { useEffect, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import ApiService from "../services/api";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await ApiService.newsData();
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
        <h1 className="text-3xl flex justify-center font-bold text-white border-2 p-2 dark:bg-purple-600 rounded-xl">Top Crypto News</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {newsData.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </>
  );
};

export default News;

