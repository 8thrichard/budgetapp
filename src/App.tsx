import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import FinancialWellness from './pages/FinancialWellness';
import Saving from './pages/Saving';
import Investing from './pages/investing';


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/financial-wellness" element={<FinancialWellness />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/saving" element={<Saving />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
