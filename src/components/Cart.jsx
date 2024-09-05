import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, deleteFromCart } from "../store/cartSlice"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/sign-in");
    } else {
      dispatch(fetchCart());
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (error) {
      console.log("Error:", error); 
      if (typeof error === "string" && error.includes("401")) {
        navigate("/sign-in");
      }
    }
  }, [error, navigate]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id)); 
  };

  const totalPrice = items.reduce((total, item) => {
    if (item.price) {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")); 
      return total + (isNaN(price) ? 0 : price);
    }
    return total;
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {items.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => handleDelete(item._id)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
          </div>
         <Link to="/checkout"><button className="delete-button">CheckOut</button></Link> 
        </div>
      )}
    </div>
  );
};

export default Cart;
