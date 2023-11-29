import React from 'react';
import '../styles/Financial.css';


const FinancialWellness: React.FC = () => {
  return (
    <div className="finance-main">
      <div>
        <h2>Reach your Financial goals one step at a time</h2>
        <p>Use Our list of important milestones and rules to achieve financial independence.</p>
        <button>Get Started</button>
      </div>
      <div>
        <h1>More Content</h1>
        <h3>Key Topics</h3>
      <ul>
        <li>1. Budgeting and Saving</li>
        <li>2. Investing Strategies</li>
        <li>3. Debt Management</li>
        <li>4. Emergency Funds</li>
        <li>5. Retirement Planning</li>
      </ul>

      </div>
    </div>    
  );
};

export default FinancialWellness;
