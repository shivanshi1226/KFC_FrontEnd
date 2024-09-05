import React from "react";
import { useState } from "react";
import HomePage from "../HomePage/HomePage";
import Footer from "../../src/components/Footer";
import MenuSideBar from "./MenuSideBar";
import "./MenuPage.css";
import Header1 from "../../src/components/Header1";
import Header2 from "../../src/components/Header2";
import BrowseCategories from "../HomePage/BrowseCategories"
import MainMenu from "./MainMenu";
const MenuPage = () => {
  const [category, setCategory] = useState("WEDNESDAY SPECIAL"); 

  return (
    <div className="menu-page">
      <div className="header-wrapper">
        <Header1 />
        <Header2 />
        <HomePage />
      </div>
      <div className="content-wrapper">
        <MenuSideBar setCategory={setCategory} />
        <MainMenu category={category} />
      </div>
      <Footer className="footer" />
    </div>
  );
};


export default MenuPage;
