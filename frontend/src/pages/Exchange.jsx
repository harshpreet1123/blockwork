import { useState, useEffect } from "react";
import ExchangeCard from "../components/ExchangeCard";
import ApiService from "../services/api";
import Loading from "../components/Loading"; // Import the Loading component

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await ApiService.exchangeData(page);
        setCryptoData((prevData) => [...prevData, ...response.data]);
        setIsLoading(false); // Set loading status to false when data is fetched
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl flex justify-center font-semibold mb-4">Crypto Exchange Info</h1>
      {isLoading ? ( // Conditional rendering based on loading status
        <Loading /> // Show loading indicator if data is loading
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cryptoData.map((crypto) => (
            <ExchangeCard key={crypto.symbol & crypto.id} crypto={crypto} />
          ))}
        </div>
      )}
      <button
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  );
}

export default App;
