import React, { useEffect, useState } from 'react';
import { fetchStockData } from './stockService';
import '../styles/stock.css'; 

const StockData: React.FC = () => {
  // State to store stock data received from the API.
  const [stockData, setStockData] = useState<any | null>(null);

  // State to store any error that occurs during the API request.
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch stock data when the component mounts.
  useEffect(() => {
    // Function to fetch stock data asynchronously.
    const fetchData = async () => {
      try {
        // Reset error state on a new successful fetch.
        setError(null);

        // API key and stock symbol for the Alpha Vantage API.
        const apiKey = 'IW0EZY08HN0EZ2TK';
        const symbol = 'AAPL';

        const data = await fetchStockData(symbol, apiKey);
        console.log(data);

        // Update this part based on the actual structure of your data
        const symbolKey = '01. symbol'; // Update with the correct key
        const priceKey = '05. price'; // Update with the correct key

        setStockData({
          symbol: data[symbolKey],
          price: data[priceKey],
        });
      } catch (error: any) {
        // Log and set an error message if the API request fails.
        console.error('Error:', error.message);
        setError('Failed to fetch stock data');
      }
    };

    fetchData();
  }, []);

  // TSX structure representing the StockData component.
  return (
    <div className="stock-data">
      {error && <div className="error-message">{error}</div>}
      {stockData && (
        <>
          <h3>Stock Data</h3>
          <ul>
            <li>{`${stockData.symbol}: $${stockData.price}`}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default StockData;
