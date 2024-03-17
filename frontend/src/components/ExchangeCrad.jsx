/* eslint-disable react/prop-types */
const ExcangeCard = ({ crypto }) => {
    const priceChangeColor = crypto.price_change_24h > 0 ? 'text-green-500' : crypto.price_change_24h < 0 ? 'text-red-500' : 'text-blue-500';
  
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={crypto.image} alt={crypto.name} className="w-12 h-12 mr-2" />
            <div>
              <h3 className="text-lg font-semibold">{crypto.name}</h3>
              <p className="text-gray-500">{crypto.symbol.toUpperCase()}</p>
            </div>
          </div>
          <div>
            <p className={`text-lg ${priceChangeColor}`}>
              ${crypto.current_price}
            </p>
            <p className={`text-sm ${priceChangeColor}`}>
              {crypto.price_change_24h > 0 ? '+' : ''}{crypto.price_change_24h.toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="flex justify-between text-gray-500">
          <p>Low 24h: ${crypto.low_24h}</p>
          <p>High 24h: ${crypto.high_24h}</p>
        </div>
      </div>
    );
  }
  
  export default ExcangeCard;