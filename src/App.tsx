// Importing necessary modules from the React and react-router-dom libraries
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing individual page components
import Home from './pages/home';
import FinancialWellness from './pages/FinancialWellness';
import Saving from './pages/Saving';
import Investing from './pages/investing';


// Functional component representing the main App
const App = () => {
  return (
    // Wrapping the entire application in a BrowserRouter to enable routing
    <Router>
      <div className="App">
        <header className="App-header">
          //Navbar
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/financial-wellness">Financial Wellness</Link>
              </li>
              <li className="hompage_logo">
                <a href="app.tsx">
                  Budget List App <span id="appversion">V</span>3.0
                </a>
              </li>
              <li>
                <Link to="/investing">Investing</Link>
              </li>
              <li>
                <Link to="/saving">Saving</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          //Routing Rules
          <Route index element={<Home />} /> //Index Routing: The first Page to show
          <Route path="/home" element={<Home />} />
          <Route path="/financial-wellness" element={<FinancialWellness />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/saving" element={<Saving />} />
        </Routes>
      </div>
    </Router>
  );
};

// Exporting the App component as the default export of this module
export default App;
