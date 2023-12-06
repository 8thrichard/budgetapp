// Investing.tsx
import React, { useEffect, useState } from 'react';
import JoinForm from './JoinForm';
import { fetchStockData } from './stockService';
import '../styles/investing.css'; // Import your CSS file

const Investing: React.FC = () => {
  const [stockData, setStockData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null); // Reset error state on successful fetch

        const apiKey = 'ICC1VC77FMTFLE61';
        const symbol = 'MSF';

        const data = await fetchStockData(symbol, apiKey);
        console.log(data);

        setStockData(data);
      } catch (error: any) {
        console.error('Error:', error.message);
        setError('Failed to fetch stock data'); // Set error state on fetch failure
      }
    };

    fetchData();
  }, []);

  return (
    <div className="investing-container">
      <h2>Investing Page</h2>
      {error && <div className="error-message">{error}</div>}
      {stockData && (
        <div className="stock-data">
          <h3>Stock Data</h3>
          <ul>
            <li>{`${stockData['01. symbol']}: $${stockData['05. price']}`}</li>
          </ul>
        </div>
      )}
      <div className="join-form">
        <h3>Join Form</h3>
        <JoinForm />
      </div>
    </div>
  );
};

export default Investing;
