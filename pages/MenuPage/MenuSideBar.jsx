import React, { useState } from "react";
import './MenuPage.css'
import { Link } from "react-router-dom";
const MenuSideBar = ({setCategory}) => {
  return (
    <div className="sidebar">
      <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" />
      <h2 className="sidebar-title">KFC MENU</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="#" className="sidebar-link" onClick={()=>setCategory("WEDNESDAY SPECIAL")}>
          WEDNESDAY SPECIAL
          </Link>
        </li>
        <li>
          <Link to="#" className="sidebar-link" onClick={()=>setCategory("NEW CHICKEN ROLLS")}>
            NEW CHICKEN ROLLS
          </Link>
        </li>
        <li>
          <Link to="#" className="sidebar-link" onClick={()=>setCategory("CHICKEN BUCKETS")}>
            CHICKEN BUCKETS
          </Link>
        </li>
        <li>
          <Link to="#" className="sidebar-link" onClick={()=>setCategory("WEDNESDAY SPECIAL")}>
            BOX MEALS
          </Link>
        </li>
        <li>
          <Link to="#" className="sidebar-link" onClick={()=>setCategory("CHICKEN BUCKETS")}>
            CHICKEN BUCKETS
          </Link>
        </li>
        <li>
          <Link to="" className="sidebar-link" onClick={()=>setCategory("NEW CHICKEN ROLLS")}>
            RICE BOWLZ
          </Link>
        </li>
        <li>
          <Link to="" className="sidebar-link" onClick={()=>setCategory("WEDNESDAY SPECIAL")} >
            VALUE SNACKERS
          </Link>
        </li>
        <li>
          <Link to="" className="sidebar-link" onClick={()=>setCategory("CHICKEN BUCKETS")}>
            CHICKEN ROLLS
          </Link>
        </li>
        <li>
          <Link to="" className="sidebar-link" onClick={()=>setCategory("WEDNESDAY SPECIAL")}>
            SNACKS
          </Link>
        </li>
        <li>
          <Link to="" className="sidebar-link" onClick={()=>setCategory("NEW CHICKEN ROLLS")}>
            BEVERAGES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuSideBar;
