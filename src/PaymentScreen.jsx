
import React from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import './PaymentScreen.css';
// Icons for this screen
import { FaArrowLeft, FaPaypal, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

const PaymentScreen = () => {
  return (
    <div className="payment-container">
      {/* 1. Header */}
      <header className="payment-header">
        
        {/* This is the corrected back button link */}
        <Link to="/cart" className="payment-back-btn">
          <FaArrowLeft />
        </Link>
        
        <span className="payment-title">Payment Methods</span>
      </header>

      {/* 2. Main Body */}
      <div className="payment-body">
        
        {/* This is the corrected PayPal link */}
        <Link to="/confirmation" className="payment-option">
          <div className="option-details">
            <FaPaypal className="option-icon paypal" />
            <div className="option-text">
              <h3>PayPal</h3>
              <p>Default Payment</p>
            </div>
          </div>
          <IoChevronForward className="option-chevron" />
        </Link>
        {/* The extra </Link> tag has been removed here */}

        {/* Payment Option 2: MasterCard */}
        <div className="payment-option">
          <div className="option-details">
            <FaCcMastercard className="option-icon mastercard" />
            <div className="option-text">
              <h3>MasterCard</h3>
              <p>Not Default</p>
            </div>
          </div>
          <IoChevronForward className="option-chevron" />
        </div>

        {/* Payment Option 3: Visa */}
        <div className="payment-option">
          <div className="option-details">
            <FaCcVisa className="option-icon visa" />
            <div className="option-text">
              <h3>Visa</h3>
              <p>Not Default</p>
            </div>
          </div>
          <IoChevronForward className="option-chevron" />
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;