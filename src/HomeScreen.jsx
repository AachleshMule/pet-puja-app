import { Link } from 'react-router-dom';
import React from 'react';
import './HomeScreen.css';
// Icons we'll need for this screen
import { IoLocationSharp, IoFilter } from 'react-icons/io5';
import { FaStar, FaRegClock } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';

const HomeScreen = () => {
  return (
    <div className="home-container">
      {/* 1. Header */}
      <header className="home-header">
        <div className="location-display">
          <IoLocationSharp className="location-icon" />
          <div className="location-text">
            <span className="location-label">Delivering to</span>
            <span className="location-address">MIT-ADT Loni Kalbhor</span>
          </div>
        </div>
        <button className="filter-btn">
          <IoFilter />
          Filter
        </button>
      </header>

      {/* 2. Main Body (will be scrollable) */}
      <div className="home-body">
        {/* Main Image */}
        <div className="main-banner">
          <img
            src="https://via.placeholder.com/390x180" // Replace with your top banner image
            alt="Main food banner"
            className="main-banner-img"
          />
        </div>

        {/* Featured Partners Section (Horizontal Scroll) */}
        <section className="horizontal-section">
          <div className="section-header">
            <h2>Featured Partners</h2>
            <a href="#" className="see-all">
              See all
            </a>
          </div>
          <div className="horizontal-scroll">
            {/* Card 1 */}
            <div className="restaurant-card-sm">
              <img
                src="https://via.placeholder.com/150" // Replace with SaDosa image
                alt="SaDosa Restaurant"
              />
              <h3>SaDosa Restaurant</h3>
              <p>South Indian</p>
              <div className="card-info">
                <span>
                  <FaStar className="info-icon star" /> 4.3
                </span>
                <span>
                  <FaRegClock className="info-icon" /> 25 min
                </span>
                <span>
                  <MdDeliveryDining className="info-icon" /> Free delivery
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="restaurant-card-sm">
              <img
                src="https://via.placeholder.com/150" // Replace with RR Cafe image
                alt="RR Cafe"
              />
              <h3>RR Cafe</h3>
              <p>Near MIT, Loni...</p>
              <div className="card-info">
                <span>
                  <FaStar className="info-icon star" /> 4.3
                </span>
                <span>
                  <FaRegClock className="info-icon" /> 25 min
                </span>
                <span>
                  <MdDeliveryDining className="info-icon" /> Free delivery
                </span>
              </div>
            </div>
            {/* Card 3 (Example) */}
            <div className="restaurant-card-sm">
              <img src="https://via.placeholder.com/150" alt="Another Cafe" />
              <h3>Another Cafe</h3>
              <p>Coffee & Snacks</p>
              <div className="card-info">
                <span>
                  <FaStar className="info-icon star" /> 4.5
                </span>
                <span>
                  <FaRegClock className="info-icon" /> 15 min
                </span>
                <span>
                  <MdDeliveryDining className="info-icon" /> Free delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Free Delivery Banner */}
        <div className="promo-banner">
          <div className="promo-text">
            <h3>Free Delivery for 1 Month!</h3>
            <p>You've to order at least $10 for free delivery for 1 month.</p>
          </div>
          {/* You would add the image here, probably as a background-image in CSS */}
        </div>

        {/* Best Picks Mess (Vertical List) */}
        <section className="vertical-section">
          <div className="section-header">
            <h2>Best Picks Mess by team</h2>
            <a href="#" className="see-all">
              See all
            </a>
          </div>
          {/* Card 1 */}
          <div className="restaurant-card-lg">
            <img
              src="https://via.placeholder.com/340x160" // Replace with Hotel Annapurna
              alt="Hotel Annapurna"
            />
            <div className="card-lg-info">
              <h3>Hotel Annapurna</h3>
              <p>Hadapsar Gaon, Loni K...</p>
              <div className="card-info">
                <span>
                  <FaStar className="info-icon star" /> 4.3
                </span>
                <span>
                  <FaRegClock className="info-icon" /> 25 min
                </span>
                <span>
                  <MdDeliveryDining className="info-icon" /> Free delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* All Mess (Vertical List) */}
        <section className="vertical-section">
          <div className="section-header">
            <h2>All Mess</h2>
            <a href="#" className="see-all">
              See all
            </a>
          </div>
          {/* Card 1 */}
<Link to="/restaurant" className="restaurant-card-lg">
  <img
    src="https://via.placeholder.com/340x160" // Replace with Wadeshwar
    alt="Wadeshwar"
  />
  <div className="card-lg-info">
    <h3>Wadeshwar</h3>
    <p>South Indian, Snacks</p>
    <div className="card-info">
      <span>
        <FaStar className="info-icon star" /> 4.5
      </span>
      <span>
        <FaRegClock className="info-icon" /> 30 min
      </span>
      <span>
        <MdDeliveryDining className="info-icon" /> Free delivery
      </span>
    </div>
  </div>
</Link>
        </section>
      </div>
      {/* 3. Bottom Navigation Bar (We'll add this later) */}
      {/* <footer className="bottom-nav">...</footer> */}
    </div>
  );
};

export default HomeScreen;