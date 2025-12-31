import { Link } from 'react-router-dom';
import React from 'react';
import './OrderConfirmationScreen.css';
// Icons for this screen
import { FaCheck } from 'react-icons/fa';

const OrderConfirmationScreen = () => {
  return (
    <div className="confirmation-container">
      {/* 1. Header (empty, for spacing) */}
      <header className="confirmation-header"></header>

      {/* 2. Main Body */}
      <div className="confirmation-body">
        <div className="checkmark-circle">
          <FaCheck />
        </div>

        <h1 className="confirmation-title">You Placed the Order Successfully</h1>

        <p className="confirmation-text">
          You placed the order successfully. You will get your food within 25
          minutes. Thanks for using our services. Enjoy your food :)
        </p>
      </div>

      {/* 3. Footer Button */}
      <footer className="confirmation-footer">
        <Link to="/home" className="browsing-btn">KEEP BROWSING</Link>
      </footer>
    </div>
  );
};

export default OrderConfirmationScreen;