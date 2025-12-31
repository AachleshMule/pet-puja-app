// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Import ALL your screen components
import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import LocationScreen from './LocationScreen';
import HomeScreen from './HomeScreen';
import RestaurantMenuScreen from './RestaurantMenuScreen';
import OrderSummaryScreen from './OrderSummaryScreen';
import PaymentScreen from './PaymentScreen';
import OrderConfirmationScreen from './OrderConfirmationScreen';

// 2. Import ALL your CSS files (so they are always available)
import './WelcomeScreen.css';
import './SignInScreen.css';
import './LocationScreen.css';
import './HomeScreen.css';
import './RestaurantMenuScreen.css';
import './OrderSummaryScreen.css';
import './PaymentScreen.css';
import './OrderConfirmationScreen.css';

function App() {
  return (
    <Routes> {/* This is the container for all your routes */}

      {/* 3. Define the "route" for each screen */}
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/location" element={<LocationScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/restaurant" element={<RestaurantMenuScreen />} />
      <Route path="/cart" element={<OrderSummaryScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/confirmation" element={<OrderConfirmationScreen />} />

    </Routes>
  );
}

export default App;