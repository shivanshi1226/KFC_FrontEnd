import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0">
                  <img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="KFC Logo"/>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><h5>KFC INDIA</h5></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/about-kfc" className="nav-link p-0">About KFC</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/about-kfc/kfc-care" className="nav-link p-0">KFC Care</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/about-kfc/careers" className="nav-link p-0">Careers</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/about-kfc/our-golden-past" className="nav-link p-0">Our Golden Past</a></li>
              <li className="nav-item mb-2"><a href="https://kfc.responsibledisclosure.com/hc/en-us" className="nav-link p-0">Responsible Disclosure</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><h5>Legal</h5></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/terms-and-conditions" className="nav-link p-0">Terms & Conditions</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/privacyPolicy" className="nav-link p-0">Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/about-kfc/disclaimer" className="nav-link p-0">Disclaimer</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/about-kfc/caution-notice" className="nav-link p-0">Caution Notice</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><h5>KFC Food</h5></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/menu" className="nav-link p-0">Menu</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Order Lookup</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/giftcards" className="nav-link p-0">Gift Card</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/about-kfc/nutrition" className="nav-link p-0">Nutrition & Allergen</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><h5>Support</h5></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/help" className="nav-link p-0">Get Help</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/contactus" className="nav-link p-0">Contact Us</a></li>
              <li className="nav-item mb-2"><a href="https://feedback.kfcindia.co.in/" className="nav-link p-0">KFC Feedback</a></li>
              <li className="nav-item mb-2"><a href="https://online.kfc.co.in/privacyPolicy" className="nav-link p-0">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <img src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg" alt='Find KFC'/>
                <a href="https://restaurants.kfc.co.in/" className="nav-link p-0">Find a KFC</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://play.google.com/store/apps/details?id=com.yum.kfc&pli=1" className="nav-link p-0">
                  <img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt='Google Play'/>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379" className="nav-link p-0">
                  <img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt='Apple Store'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
