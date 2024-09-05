import React from "react";
import "./Header.css";
import { FaBitbucket, FaRupeeSign  } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header2 = () => {
  return (
    <div>
      <header className="p-3 mb-3 border-bottom header2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to={'/'} className="nav-link px-2 link-secondary">
                  <img
                    src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                    alt="KFC Logo"
                  />
                </Link>
              </li>
              <li>
                <Link to="/menu" className="nav-link px-2 link-body-emphasis">
                 <p>Menu</p>
                </Link>
              </li>
              <li>
                <Link to="/deals" className="nav-link px-2 link-body-emphasis">
                <p>Deals</p>
                </Link>
              </li>
            </ul>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/login" className="nav-link px-2 link-secondary">
                  <img
                    src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                    alt="Account Icon"
                  />
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link px-2 link-body-emphasis">
                <p>Sign In</p>
                </Link>
              </li>
              <li>
                <span className="separator">|</span>
              </li>
              <li>
                <Link to="/order" className="nav-link px-2 link-body-emphasis">
                <span className='item-count'><FaRupeeSign />0</span>  
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link px-2 link-body-emphasis">
                    <FaBitbucket/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header2;
