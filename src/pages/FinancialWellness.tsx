import React from 'react';
import '../styles/Financial.css';

// TSX structure representing the FinancialWellness Page
const FinancialWellness: React.FC = () => {
  return (
    <div className="finance-main">
      <div>
        <div>
          <h2>How can you be well financially?</h2>
          </div>
        <div className='layout'>
          <div className='content-container'>
            <h3>Budgeting and Saving</h3>
            <p id='content-Paragraph'>
            At the core of financial wellness lies the meticulous craft of budgeting. Set achievable spending and saving goals, employing our sophisticated tools to scrutinize and monitor your expenditures. Construct not merely a budget but a dynamic financial roadmap, guiding your decisions, fostering stability, and propelling you steadily towards the realization of your financial dreams.
            </p>       
          </div>
          <div className='content-container'>
            <h3>Investing Strategies</h3>
            <p id='content-Paragraph'>
            Embark on a journey into the world of investments, where informed decisions can shape your financial future. Dive into the basics of stocks, bonds, and various investment avenues. Our goal is to empower you to tailor your investment strategy to align with your unique financial objectives. By understanding the nuances of the market, you can navigate the complexities and build a diversified and resilient investment portfolio.            </p>
          </div>

          <div className='content-container'>
            <h3>Emergency Funds</h3>
            <p id='content-Paragraph'>
            Think of an emergency fund as your financial safety net. Unexpected situations are a part of life, and having a robust emergency fund ensures you're prepared for the unexpected. Discover the importance of maintaining an emergency fund, learn effective strategies to build and consistently contribute to it, and experience the peace of mind that comes from knowing you have a financial cushion in times of need.</p>
          </div>

          <div className='content-container'>
            <h3>Debt Management</h3>
            <p id='content-Paragraph'>
            Debt is a reality for many, but managing it effectively is key to financial freedom. Uncover strategies to repay debt efficiently, visualize your obligations, and avoid the pitfalls of falling deeper into financial strain. Our tools are designed to empower you in taking control of your debt, paving the way for a debt-free future and enhanced financial well-being.            </p>
          </div>

          <div className='content-container'>
            <h3>Retirement Planning</h3>
            <p id='content-Paragraph'>
            Retirement may seem distant, but the earlier you plan, the more secure your future becomes. Delve into the world of retirement savings, from employer-sponsored plans to individual retirement accounts (IRAs). Understand the essentials of retirement planning, take proactive steps now, and ensure a comfortable and stress-free retirement when the time comes.</p>
          </div>
          
          <div className='content-container'>
            <h3>Credit Card Management</h3>
            <p id='content-Paragraph'> 
            Credit cards can be powerful allies when used wisely. Navigate the nuances of credit card usage, from choosing the right card to managing credit utilization. Learn how to use credit responsibly to build a positive credit history, opening doors to favorable financial opportunities. Establish a strong credit foundation for your financial journey by mastering the art of credit card management.</p>
          </div>
        </div>
      </div>
    </div>    
  );
};

export default FinancialWellness;
