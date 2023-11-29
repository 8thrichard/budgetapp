import React from 'react';
import '../styles/Financial.css';


const FinancialWellness: React.FC = () => {
  return (
    <div className="finance-main">
      <div>
        <div className='layout'>
          <div className='content-container'>
            <h3>Budgeting and Saving</h3>
            <p id='content-Paragraph'>
            Creating a budget is the foundation of financial wellness. Learn how to set realistic spending and saving goals. Our budgeting tools can assist you in tracking your expenses and saving for your financial goals.
            </p>
          </div>

          <div className='content-container'>
            <h3>Investing Strategies</h3>
            <p id='content-Paragraph'>
               Explore various investment options and strategies to grow your wealth over time. Understand the basics of stocks, bonds, and other investment vehicles. Make informed decisions to build a robust investment portfolio.
            </p>
          </div>

          <div className='content-container'>
            <h3>Emergency Funds</h3>
            <p id='content-Paragraph'>
            Building an emergency fund provides financial security in unexpected situations. Discover the importance of having an emergency fund and strategies to build and maintain it.
            </p>
          </div>

          <div className='content-container'>
            <h3>Debt Management</h3>
            <p id='content-Paragraph'>
            Managing debt is crucial for financial health. Learn effective debt repayment strategies and methods to avoid falling into a debt trap. Our tools can help you visualize and manage your debt obligations.
            </p>
          </div>

          <div className='content-container'>
            <h3>Retirement Planning</h3>
            <p id='content-Paragraph'>
            Plan for a comfortable and secure retirement by understanding the various retirement savings options. Learn about employer-sponsored plans, individual retirement accounts (IRAs), and other retirement planning essentials.
            </p>
          </div>
          
          <div className='content-container'>
            <h3>Credit Card Management</h3>
            <p id='content-Paragraph'> 
            Credit cards can be powerful financial tools when used wisely. Understand how to choose the right credit card, manage your credit utilization, and use credit responsibly to build a positive credit history.
            </p>
          </div>

        </div>
      </div>
    </div>    
  );
};

export default FinancialWellness;
