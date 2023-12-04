import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/home';
import FinancialWellness from './pages/FinancialWellness';
import Saving from './pages/Saving';
import Investing from './pages/investing';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <nav>
              <div className="hamburger-icon" onClick={toggleMobileMenu}>
                &#9776;
              </div>

              <ul className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li>
                  <Link to="/home" onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/financial-wellness" onClick={toggleMobileMenu}>
                    Financial Wellness
                  </Link>
                </li>
                <li>
                  <Link to="/investing" onClick={toggleMobileMenu}>
                    Investing
                  </Link>
                </li>
                <li>
                  <Link to="/saving" onClick={toggleMobileMenu}>
                    Saving
                  </Link>
                </li>
              </ul>

              <ul className="desktop-menu">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/financial-wellness">Financial Wellness</Link>
                </li>
                <li className="hompage_logo">
                  <a href="#">
                    Budget List App <span id="appversion">V3.0</span>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
