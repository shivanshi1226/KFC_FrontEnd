import React from 'react'
import Header1 from '../../src/components/Header1'
import Header2 from '../../src/components/Header2'
import Footer from '../../src/components/Footer'
import { Outlet } from 'react-router-dom'
import HomePage from './HomePage'
import Banner from './Banner'
import BrowseCategories from './BrowseCategories'
import './HomePage.css'
import ExclusiveOffers from './ExclusiveOffers'

const ConstantPage = () => {
  return (
    <div className="constant-page">
      <Header1/>
      <Header2/>
      <div className="main-content">
        <HomePage/>
        <Banner/>
        <BrowseCategories/>
        <ExclusiveOffers/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default ConstantPage