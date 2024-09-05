import React from "react";
import './StartOrder.css';
import { FaTimes } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
const StartOrder = () => {
  return (
    <div className="start-order-container">
      <div className="order-box">
      <header className="d-flex flex-column align-items-center py-3">
        <div className="d-flex align-items-center mb-3">
          <h3>START YOUR ORDER</h3>
          <button className="close-button">
            <Link to="/"><FaTimes /></Link>
          </button>
        </div>
        <hr/>
          <h1 className="text-center mb-3">How would you like to receive your order?</h1>
          <div className="buttons">
            <button><Link to="/address">Delivery</Link></button>
            <button>Pick up</button>
            <button>Dine In</button>
          </div>
      </header>
      </div>
    </div>
  );
};

export default StartOrder;
