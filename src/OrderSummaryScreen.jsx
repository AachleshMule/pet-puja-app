import { Link } from 'react-router-dom';
import React from 'react';
import './OrderSummaryScreen.css';
// Icons for this screen
import { FaArrowLeft } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

const OrderSummaryScreen = () => {
  return (
    <div className="order-container">
      {/* 1. Header */}
      <header className="order-header">
        <Link to="/restaurant" className="order-back-btn">
  <FaArrowLeft />
</Link>
        <span className="order-title">Your Orders</span>
      </header>

      {/* 2. Main Body (scrollable) */}
      <div className="order-body">
        {/* Order Item */}
        <div className="order-item">
          <div className="item-name">
            <span>1</span>
            <span>x</span>
            <span>Mess Thali</span>
          </div>
          <span className="item-price">$80</span>
        </div>

        {/* Promo and Add Items */}
        <div className="order-links">
          <a href="#" className="order-link">
            <span>Add more items</span>
            <IoChevronForward />
          </a>
          <a href="#" className="order-link">
            <span>Promo code</span>
            <IoChevronForward />
          </a>
        </div>

        {/* Price Breakdown */}
        <div className="price-summary">
          <div className="price-line">
            <span>Subtotal</span>
            <span>$80</span>
          </div>
          <div className="price-line">
            <span>Delivery</span>
            <span>$0</span>
          </div>
          <div className="price-line total">
            <span>Total</span>
            <span>$80</span>
          </div>
        </div>
      </div>

      {/* 3. Footer Button */}
      <footer className="order-footer">
        <Link to="/payment" className="continue-btn">
  CONTINUE ($80)
</Link>
      </footer>
    </div>
  );
};

export default OrderSummaryScreen;