import React, { useState, useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import "./MainMenu.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart, fetchCart } from '../../src/store/cartSlice';

const MainMenu = ({ category }) => {
  const [menu, setMenu] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleAddToCart = async (item) => {
    await dispatch(addToCart(item));
    dispatch(fetchCart());
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://kfc-clone-backend-3.onrender.com/menu/getPost",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setMenu(data);
    };
    fetchProducts();
  }, []);

  const filteredItem = menu.filter((item) => item.type === category);

  return (
    <div className="main-menu">
      <input
        type="text"
        placeholder="Enter your Menu"
        className="menu-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="menu-items">
        {filteredItem.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.title} className="menu-image" />
            <h3 className="menu-title">{item.title}</h3>
            <h3 className="menu-price">{item.price}</h3>
            <p className="menu-desc">{item.desc}</p>
            <Link to="/cart"> 
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                Add to Cart <MdShoppingCart />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
