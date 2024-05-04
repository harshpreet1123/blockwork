import { useEffect, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import ApiService from "../services/api";
import Loading from "../components/Loading"; // Import the Loading component

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await ApiService.newsData();
        setNewsData(data.articles);
        setIsLoading(false); // Set loading status to false when data is fetched
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl flex justify-center font-semibold">Top Crypto News</h1>
      </div>
      {isLoading ? ( // Conditional rendering based on loading status
        <Loading /> // Show loading indicator if data is loading
      ) : (
        <div className="grid grid-cols-2 gap-4 p-4">
          {newsData.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </>
  );
};

export default News;
