import React, { useEffect, useState } from "react";
import "./OfferPage.css";
import { Link } from "react-router-dom";

const OfferPage = () => {
  const [deals, setDeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch("https://kfc-clone-backend-3.onrender.com/menu/getPost");
      const data = await response.json();
      setDeals(data);
    };
    fetchOffers();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };
  return (
    <div className="container">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" />
      <header className="offer-header">
        <h1>National Offers</h1>
        <Link to="/login">
          <p>Sign In to see exclusive offers & deals</p>
        </Link>
      </header>

      <div className="offer-grid">
        <div className="offer-card offer-featured">
          <img
            src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg"
            alt="Find a KFC"
            className="offer-image"
          />
          <Link to="/order">
            <button className="dealButton">FIND A KFC</button>
          </Link>
        </div>

        <div className="offer-card offer-featured">
          <img
            src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg"
            alt="Login"
            className="offer-image"
          />
          <Link to="/login">
            <button className="dealButton">Login</button>
          </Link>
        </div>
        {deals.slice(0, visibleCount).map((deal, index) => {
          return (
            <div key={index} className="offer-card">
              <img src={deal.image} alt={deal.title} className="offer-image" />
              <h2 className="offer-title">{deal.title}</h2>
              <p className="offer-description">{deal.desc}</p>
              <div className="offer-details">
                <Link
                  to="/offer"
                  state={{ title: deal.title, description: deal.description }}
                >
                  <p>View Details</p>
                </Link>
                <Link to="/order">
                  <button className="loadMoreButton">Apply Offer</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {visibleCount < deals.length && (
        <div className="load-more-container">
          <button className="loadMoreButton" onClick={loadMore}>
            Load More
          </button>
          <p>
            Viewed {visibleCount} of {deals.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default OfferPage;
