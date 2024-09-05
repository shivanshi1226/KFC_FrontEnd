import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const totalPrice = items.reduce((total, item) => {
    if (item.price) {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + (isNaN(price) ? 0 : price);
    }
    return total;
  }, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="checkout-items">
          {items.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.image} alt={item.title} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
          <div className="checkout-summary">
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
            <button className="checkout-button" onClick={handleCheckout}>
              Complete Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
