import React from 'react';
import Header1 from '../../src/components/Header1';
import Header2 from '../../src/components/Header2';
import Footer from '../../src/components/Footer';
import { Outlet } from 'react-router-dom';
import HomePage from '../HomePage/HomePage'
import './DealPage.css'; 
import DealBanner from './DealBanner';
import OfferPage from './OfferPage';

const DealPage = () => {
  return (
    <div className="main-container">
      <Header1 />
      <Header2 />
      <div className="constant-page">
        <HomePage/>
        <DealBanner/>
        <OfferPage/>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DealPage;
