import React, { useState } from 'react';
import './App.css';
import { transform } from 'typescript';

interface BudgetItem {
  id: number;
  name: string;
  amount: number;
}

const initialBudgetItems: BudgetItem[] = [];

const App: React.FC = () => {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemAmount, setNewItemAmount] = useState<number | ''>(''); // '' represents an empty string

  const handleAddItem = () => {
    if (newItemName && newItemAmount !== '') {
      const newItem: BudgetItem = {
        id: Date.now(),
        name: newItemName,
        amount: +newItemAmount, // Convert the string to a number
      };
      setBudgetItems([...budgetItems, newItem]);
      setNewItemName('');
      setNewItemAmount('');
    }
  };

  const handleAmountInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleDeleteItem = (item: BudgetItem) => {
    const updatedItems = budgetItems.filter(i => i.id !== item.id);
    setBudgetItems(updatedItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#"> Financial Wellness</a></li>
            <li className='hompage_logo'><a href="app.tsx">Budget List App <span id='appversion'>V</span>3.0</a></li>
            <li><a href="#">Investing</a></li>
            <li><a href="#">Saving</a></li>
          </ul>
        </nav>
      </header>
      <div className="App-content">
        <div className="budget-controls">
          <div className="input-group">
            <input
              type="text"
              placeholder="Budget Name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Budget Amount"
              value={newItemAmount}
              onChange={(e) => setNewItemAmount(+e.target.value)}
              onKeyUp={handleAmountInputKeyUp}
            />
            <button onClick={handleAddItem}>Add</button>
          </div>
        </div>
        <div className="budget-list">
          {budgetItems.length === 0 ? (
            <div className="no-items">
              <p className="no-items-message">No Budget Items</p>
              <p className="add-item-message">Add Budget Item</p>
            </div>
          ) : (
            <div>
              <p className="budget-heading">Budget Items</p>
              {budgetItems.map(item => (
                <div key={item.id} className="budget-item">
                  <div className="item-details">
                    <span>{item.name}</span>
                    <span>${item.amount}</span>
                  </div>
                  <div>
                    <button className="delete-button" onClick={() => handleDeleteItem(item)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
