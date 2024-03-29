// src/App.js

import { useState, useEffect } from "react";
import axios from "axios";
import ExcangeCard from "../components/ExchangeCrad";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              per_page: 12,
              page: page,
              sparkline: false,
            },
          }
        );
        setCryptoData((prevData) => [...prevData, ...response.data]);
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
      <h1 className="text-3xl font-semibold mb-4">Crypto Exchange Info</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cryptoData.map((crypto) => (
          <ExcangeCard key={crypto.symbolcrypto.id} crypto={crypto} />
        ))}
      </div>
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
