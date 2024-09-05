import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../OrderPage.jsx/StartOrder.css";
import { FaTimes } from "react-icons/fa";

const DealDetail = () => {
  const location = useLocation();
  const { title, description } = location.state || {};

  return (
    <div className="start-order-container">
      <div className="order-box">
        <header className="d-flex flex-column align-items-center py-3">
          <div className="d-flex align-items-center mb-3">
            <h3>Exclusive Offers for you</h3>
            <button className="close-button">
              <Link to="/deals">
                <FaTimes />
              </Link>
            </button>
          </div>
          <hr />
          <h1 className="text-center mb-3">
            How would you like to receive your order?
          </h1>
          <div className="buttons">
            <h1 className="text-center mb-3">  {title}</h1>
            <p className="text-center mb-3"> {description}</p>
            <Link to="/order">
              <button>Apply Offer</button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DealDetail;
