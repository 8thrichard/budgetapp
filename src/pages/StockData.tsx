import React, { useEffect, useState } from 'react';
import { fetchStockData } from './stockService';
import '../styles/stock.css'; 

/** 
 * A React functional component that fetches and displays stock data.
 * @returns TSX element representing the StockData component.
 */

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
        const apiKey = 'T6UQ4DC8D36YNH0A';
        const symbol = 'AAPL';

        const data = await fetchStockData(symbol, apiKey);
        console.log(data);

        setStockData(data);
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
            <li>{`${stockData['01. symbol']}: $${stockData['05. price']}`}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default StockData;
