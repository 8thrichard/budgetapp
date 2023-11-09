import React, { useState } from 'react';
import '../styles/home.css';
import { transform } from 'typescript';

interface BudgetItem {
  id: number;
  name: string;
  amount: number;
}

// Initializing an empty array for initialBudgetItems
const initialBudgetItems: BudgetItem[] = [];

// Functional component representing the Home page
const Home: React.FC = () => {
  // State variables for managing budget items and input fields
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemAmount, setNewItemAmount] = useState<number | ''>(''); // '' represents an empty string

  // Function to handle adding a new budget item
  const handleAddItem = () => {
      // Check if both name and amount are provided
    if (newItemName && newItemAmount !== '') {
      const newItem: BudgetItem = {

      // Create a new budget item
        id: Date.now(),
        name: newItemName,
        amount: +newItemAmount, // Convert the string to a number
      };
      setBudgetItems([...budgetItems, newItem]);
      setNewItemName('');
      setNewItemAmount('');
    }
  };

    // Function to handle Enter key press in the amount input field
  const handleAmountInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // If Enter key is pressed, add the item
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

    // Function to handle deleting a budget item
  const handleDeleteItem = (item: BudgetItem) => {
    const updatedItems = budgetItems.filter(i => i.id !== item.id);
    setBudgetItems(updatedItems);
  };

  // Rendering the Home component
  return (
    <div className="App">
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

// Exporting the Home component as the default export of this module
export default Home;
