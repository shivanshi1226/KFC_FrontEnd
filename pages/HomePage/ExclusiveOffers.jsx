import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ExclusiveOffers.css";
import { Link } from "react-router-dom";
const ExclusiveOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(
          "https://kfc-clone-backend-3.onrender.com/menu/getPost"
        );
        const data = await response.json();
        setOffers(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };
    fetchOffers();
  }, []);

  return (
    <div className="exclusive-offers-container">
      <div className="offer-header">
        <h2>EXCLUSIVE OFFERS FOR YOU</h2>
        <a href="#" className="view-all-deals">
          View All Deals →
        </a>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={16}
        navigation
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
        }}
        className="offer-grid"
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="offer-card">
              <img
                src={offer.image}
                alt={offer.title}
                className="offer-image"
              />
              <div className="offer-content">
                <h3 className="offer-title">{offer.title.slice(0, 20)}...</h3>
                <p className="offer-description">₹{offer.price}</p>
              </div>
              <div className="offer-actions">
                <button className="offer-button">
                  <Link
                    to="/offer"
                    state={{
                      title: offer.title,
                      description: offer.description,
                    }}
                  >
                    View Details
                  </Link>
                </button>
               <button className="offer-button"> <Link to="/order"> Apply Offer</Link> </button>      
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExclusiveOffers;
