import axios from "axios";
const BASE_URL = "http://localhost:5000";

const ApiService = {
  register: async (email, password, userType) => {
    const paramas = { email: email, password: password };
    const response = await axios.post(
      `${BASE_URL}/${userType}/register`,
      paramas
    );
    console.log(response.body);
    return response;
  },

  login: async (email, password, userType) => {
    const paramas = { email: email, password: password };
    const response = await axios.post(`${BASE_URL}/${userType}/login`, paramas);
    console.log(response.body);
    return response;
  },

  exchangeData: async (page) => {
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
    return response;
  },

  newsData: async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=blockchain&q=crypto&language=en&sortBy=popularity&pageSize=10&page=1&apiKey=79b953060c674330b0ccc948ff6cdd0e"
    );
    const data = await response.json();
    return data;
  },
};
export default ApiService;
