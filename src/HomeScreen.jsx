import React from 'react';
import { Link } from 'react-router-dom';
import mainBanner from './BG.png'; 
import sadosaImg from './res3 1.png'; 
import rrCafeImg from './Header.png'; 
import './HomeScreen.css';

// Icons
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

      {/* 2. Main Body */}
      <div className="home-body">
        <div className="main-banner">
          <img src={mainBanner} alt="Main food banner" className="main-banner-img" />
        </div>

        <section className="horizontal-section">
          <div className="section-header">
            <h2>Featured Partners</h2>
            {/* THIS IS THE FIX FOR 'SEE ALL' */}
            <Link to="/menu" className="see-all">See all</Link>
          </div>
          
          <div className="horizontal-scroll">
            {/* THIS IS THE FIX FOR SADOSA CARD */}
            <Link to="/menu" className="restaurant-card-sm">
              <img src={sadosaImg} alt="SaDosa Restaurant" />
              <h3>SaDosa Restaurant</h3>
              <p>South Indian</p>
              <div className="card-info">
                <span><FaStar className="info-icon star" /> 4.3</span>
                <span><FaRegClock className="info-icon" /> 25 min</span>
                <span><MdDeliveryDining className="info-icon" /> Free delivery</span>
              </div>
            </Link>

            {/* THIS IS THE FIX FOR RR CAFE CARD */}
            <Link to="/menu" className="restaurant-card-sm">
              <img src={rrCafeImg} alt="RR Cafe" />
              <h3>RR Cafe</h3>
              <p>Near MIT, Loni...</p>
              <div className="card-info">
                <span><FaStar className="info-icon star" /> 4.3</span>
                <span><FaRegClock className="info-icon" /> 25 min</span>
                <span><MdDeliveryDining className="info-icon" /> Free delivery</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;