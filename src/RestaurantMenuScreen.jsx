import { Link } from 'react-router-dom';
import React from 'react';
import './RestaurantMenuScreen.css';
// Icons for this screen
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { BiFoodTag } from 'react-icons/bi';
import { MdDeliveryDining } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

// Import your images at the top
// import wadeshwarHeader from './wadeshwar-header.png';
// import messThali from './mess-thali.png';
// import puriBhaji from './puri-bhaji.png';

const RestaurantMenuScreen = () => {
  return (
    <div className="menu-container">
      {/* 1. Header with Image and Back Button */}
      <header className="menu-header">
        <img
          src="https://via.placeholder.com/390x200" // Replace with wadeshwarHeader
          alt="Wadeshwar Mess"
          className="header-image"
        />
        <Link to="/home" className="back-btn-over-image">
  <FaArrowLeft />
</Link>
      </header>

      {/* 2. Main Body (scrollable) */}
      <div className="menu-body">
        {/* Restaurant Info */}
        <section className="restaurant-info">
          <h1>Wadeshwar Mess and Restaurant</h1>
          <div className="info-tags">
            <span>
              <FaStar className="info-icon star" /> 4.5
            </span>
            <span>
              <BiFoodTag className="info-icon veg" /> Veg
            </span>
          </div>
          <p className="description">South Indian, Snacks</p>

          <div className="delivery-info-box">
            <div className="info-item">
              <MdDeliveryDining className="info-icon" />
              <span>Free Delivery</span>
            </div>
            <div className="info-item">
              <FaRegClock className="info-icon" />
              <span>25 Mins</span>
            </div>
            <div className="info-item">
              <IoLocationSharp className="info-icon" />
              <span>2.5 Km</span>
            </div>
          </div>

          <a href="#" className="view-menu-link">
            TAKE ME TO MENU
          </a>
        </section>

        {/* Featured Items Section (Horizontal Scroll) */}
        <section className="horizontal-section menu-section">
          <div className="section-header">
            <h2>Featured Items</h2>
          </div>
          <div className="horizontal-scroll">
            {/* Item 1 */}
            <div className="menu-card-sm">
              <img
                src="https://via.placeholder.com/150x100" // Replace with messThali
                alt="Mess Thali"
              />
              <h3>Mess Thali</h3>
              <p>Veg</p>
              <span className="price">$50</span>
            </div>
            {/* Item 2 */}
            <div className="menu-card-sm">
              <img
                src="https://via.placeholder.com/150x100" // Replace with puriBhaji
                alt="Puri Bhaji"
              />
              <h3>Puri Bhaji</h3>
              <p>Veg</p>
              <span className="price">$60</span>
            </div>
            {/* Item 3 (Example) */}
            <div className="menu-card-sm">
              <img
                src="https://via.placeholder.com/150x100"
                alt="Idli Sambar"
              />
              <h3>Idli Sambar</h3>
              <p>Veg</p>
              <span className="price">$40</span>
            </div>
          </div>
        </section>

        {/* Today's Menu Section (Vertical List) */}
        <section className="vertical-section menu-section">
          <div className="section-header">
            <h2>Today's Menu</h2>
          </div>
          
          {/* Menu Item 1 */}
          <div className="menu-card-lg">
            <div className="item-details">
              <h3>Mess Thali</h3>
              <p>Chapati, Bhaji, Dal, Rice, Salad, Sweet</p>
              <span className="price">$50</span>
            </div>
            <div className="item-image-wrapper">
              <img 
                src="https://via.placeholder.com/100x100" // Replace with messThali
                alt="Mess Thali" 
              />
              <Link to="/cart" className="add-btn">+</Link>
            </div>
          </div>
          
          {/* Menu Item 2 */}
          <div className="menu-card-lg">
            <div className="item-details">
              <h3>Puri Bhaji</h3>
              <p>4 Puri with tasty bhaji, salad</p>
              <span className="price">$60</span>
            </div>
            <div className="item-image-wrapper">
              <img 
                src="https://via.placeholder.com/100x100" // Replace with puriBhaji
                alt="Puri Bhaji" 
              />
              <Link to="/cart" className="add-btn">+</Link>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default RestaurantMenuScreen;