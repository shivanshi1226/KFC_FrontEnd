import React from "react";
import "./Header.css";
import { FaBitbucket, FaRupeeSign } from "react-icons/fa";
const Header1 = () => {
  return (
    <div>
      <header className="p-3 mb-3 border-bottom header1">
        <div className="container">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                <img
                  src="https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg"
                  alt="MAP"
                />
            </li>
            <li>
                <p>Allow location access for local store menu and promos</p>
            </li>
            <li>
                <button className="header1button">SET LOCATION</button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header1;
