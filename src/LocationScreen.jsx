import { Link } from 'react-router-dom';
import React from 'react';
import './LocationScreen.css';
// Importing icons
import { IoClose, IoLocationSharp } from 'react-icons/io5';
import { MdGpsFixed } from 'react-icons/md';

const LocationScreen = () => {
  return (
    <div className="location-container">
      {/* 1. Header with Close Button */}
      <header className="location-header">
        <Link to="/signin" className="close-btn">
  <IoClose />
</Link>
      </header>

      {/* 2. Main Content */}
      <div className="location-body">
        <h1 className="location-title">Find Mess near you</h1>
        <p className="location-subtitle">
          Please enter your location or allow access to your location to find
          restaurants near you.
        </p>

        {/* 3. Input Fields */}
        <div className="location-inputs">
          <Link to="/home" className="input-wrapper">
  <MdGpsFixed className="input-icon" />
  <input
    type="text"
    placeholder="Use current location"
    className="location-input current"
    readOnly // Make it not-editable
  />
</Link>

          <div className="input-wrapper">
            <IoLocationSharp className="input-icon" />
            <input
              type="text"
              placeholder="Enter your location"
              className="location-input manual"
            />
          </div>
        </div>

        {/* 4. Recent Searches (Hardcoded) */}
        <div className="recent-searches">
          <h2 className="recent-title">Recent Searches</h2>
          
          <div className="recent-item">
            <IoLocationSharp className="recent-icon" />
            <div className="recent-text">
              <h3>Loni Kalbhor P,une</h3>
              <p>Loni Kalbhor, Pune, Maharashtra, India</p>
            </div>
          </div>
          
          <div className="recent-item">
            <IoLocationSharp className="recent-icon" />
            <div className="recent-text">
              <h3>Hote Sa Mess, Lon Kalbor</h3>
              <p>Near MIT ADT University, Loni Kalbhor</p>
            </div>
          </div>
          
          <div className="recent-item">
            <IoLocationSharp className="recent-icon" />
            <div className="recent-text">
              <h3>Mess Master Spiecs, Lon Kalbor</h3>
              <p>Loni Kalbhor, Pune, Maharashtra, India</p>
            </div>
          </div>
          
          <div className="recent-item">
            <IoLocationSharp className="recent-icon" />
            <div className="recent-text">
              <h3>ShraddhaMess Survices, on Kalbor</h3>
              <p>Loni Kalbhor, Pune, Maharashtra, India</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationScreen;