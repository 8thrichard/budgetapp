import React, { useEffect, useState } from 'react';
import JoinForm from './JoinForm';
import '../styles/investing.css'; 
import StockData from './StockData';

  // TSX structure representing the INVESTING Page
const Investing: React.FC = () => {

  return (
    <div>
            <StockData/>
         <div className='investing-content'>
              <h2>Why Invest? Understanding the Importance of Investing</h2>
              <p>
                Having a savings account is an essential first step in financial planning, but it's only a part of the larger financial picture. <br />
                While saving money helps build a financial safety net, investing in the financial markets <br /> becomes crucial after establishing sufficient emergency savings. <br />
                Here's why investing is important and how it can benefit you:
              </p>
              <div className="responsive-container">
                <h3>Building Wealth:</h3>
                <p>Invest to make your money work for you and potentially build wealth.</p>
                <p>Smart investing can outpace inflation, ensuring your money grows in value.</p>
              </div>

              <div className="responsive-container">
                <h3>The Power of Compounding:</h3>
                <p>Reinvest earnings or dividends for exponential growth.</p>
                <p>Starting early and automatic reinvestment maximize compounding benefits.</p>
              </div>

              <div className="responsive-container">
                <h3>Risk-Return Tradeoff:</h3>
                <p>Different investments offer varied returns and risks.</p>
                <p>Higher return potential (e.g., stocks) comes with higher risk, while lower risk accompanies lower returns (e.g., savings accounts).</p>
              </div>

              <div className="responsive-container">
                <h3>Understanding Risk Tolerance:</h3>
                <p>Align risk tolerance with financial goals and timeline.</p>
                <p>Balance risk for growth, considering comfort level.</p>
              </div>

              <div className="responsive-container">
                <h3>Beating Inflation:</h3>
                <p>Investments like stocks historically outperform inflation.</p>
                <p>Some risk is necessary to outpace inflation and preserve purchasing power.</p>
              </div>
            </div> 
      <JoinForm />
    </div>
  );
};

export default Investing;

