import React from 'react';
import './HomePage.css'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="/" className="logo">
              <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <div className="cta">
              <p className="cta-text">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
              <Link to="/order"><button type="button" className="cta-button">START ORDER</button></Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
