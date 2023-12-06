import React from 'react';
import StockData from './StockData';
import '../styles/saving.css';

// TSX structure representing the Savings Page.
const Saving: React.FC = () => {
  return (
    <div>
      <div className="savings-container">
        <h2>Saving Challenges</h2>
        <div className="video-container">
          <iframe
            title="Savings Video"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/cp7vqImQl18"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          Explore the challenges and strategies for achieving your savings goals in
          this insightful video.
        </p>
      </div>
    </div>
  );
};

export default Saving;
