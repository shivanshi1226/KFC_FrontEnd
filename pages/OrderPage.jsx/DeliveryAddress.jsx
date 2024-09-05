import React from "react";
import './DeliveryAddress.css';
import { FaTimes, FaMapMarkerAlt,FaBackward  } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
const DeliveryAddress = () => {
  return (
    <div className="delivery-address-container">
      <div className="address-box">
        <header className="d-flex justify-content-between align-items-center py-3">
        <button className="back-button">
            <Link to="/order"><FaBackward/></Link>
          </button>
          <h3>DELIVERY ADDRESS</h3>
          <button className="close-button">
            <Link to="/"><FaTimes /></Link>
          </button>
        </header>
        <hr/>
        <div className="user-options">
          <p>Already a member? <a href="#">Sign In</a></p>
          <p><a href="#">Use My Location</a></p>
        </div>
        <div className="search-bar">
          <FaMapMarkerAlt className="icon"/>
          <input type="text" placeholder="Search for area, street name..." />
          <button className="confirm-button">Confirm</button>
        </div>
        <p className="location-prompt">Please enter your location</p>
        <a href="#" className="map-link">Map</a>
      </div>
    </div>
  );
};
export default DeliveryAddress;
