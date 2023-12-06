import React, { useEffect, useState } from 'react';
import { fetchStockData } from './stockService';
import '../styles/stock.css'; 

const StockData: React.FC = () => {
  const [stockData, setStockData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchData = async () => {
    try {
        setError(null);

        const apiKey = '09IUR778G9A66XEH';
        const symbol = 'AAPL';

        const data = await fetchStockData(symbol, apiKey);
        console.log(data);

        setStockData(data);
    } catch (error: any) {
        console.error('Error:', error.message);
        setError('Failed to fetch stock data');
    }
    };

    fetchData();
  }, []);

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
