import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BrowseCategories.css';

const BrowseCategories = () => {
  return (
    <div className="container">
      <h1>BROWSE CATEGORIES</h1>
      <div className="category-grid">
        <Link to="" className="category-card">
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=51.16" alt="International Burger Fest" />
          <h2>INTERNATIONAL BURGER FEST</h2>
        </Link>
        <Link to="" className="category-card">
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=51.16" alt="Match Day Combos" />
          <h2>MATCH DAY COMBOS</h2>
        </Link>
        <Link to="" className="category-card">
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=51.16" alt="Value Lunch Special" />
          <h2>VALUE LUNCH SPECIAL</h2>
        </Link>
        <Link to="" className="category-card">
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=51.16" alt="Box Meals" />
          <h2>BOX MEALS</h2>
        </Link>
        <Link to="" className="category-card">
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=51.16" alt="Burgers" />
          <h2>BURGERS</h2>
        </Link>
        <Link to="" className="category-card">
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=51.16" alt="Chicken Buckets" />
          <h2>CHICKEN BUCKETS</h2>
        </Link>
        <Link to="" className="category-card">
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=51.16" alt="Rice Bowls" />
          <h2>RICE BOWLS</h2>
        </Link>
        <Link to="/menu" className="view-all-card">
          <img src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt="View All Menu" />
          <h2>View All Menu <FaArrowRight /></h2>
        </Link>
      </div>
    </div>
  );
};

export default BrowseCategories;
