import { Link } from 'react-router-dom';
import React from 'react';
import './SignInScreen.css'; // We will create this file next
// Importing icons - you might need to install 'react-icons' for this
// In your terminal, run: npm install react-icons
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SignInScreen = () => {
  return (
    <div className="sign-in-container">
      {/* 1. Header with Back Arrow */}
      <header className="sign-in-header">
        <Link to="/" className="back-btn">
  <FaArrowLeft />
</Link>
        <span>Sign In</span>
      </header>

      {/* 2. Welcome Title */}
      <div className="sign-in-body">
        <h1 className="welcome-title">Welcome To Pet Puja</h1>
        <p className="welcome-subtitle">
          Enter your Phone number or Email address for sign in. Enjoy your food :)
        </p>

        {/* 3. Sign In Form */}
        <form className="sign-in-form">
          <div className="input-group">
            <label htmlFor="email">EMAIL ADDRESS / PHONE</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your phone number or email address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <div className="password-wrapper">
              <input type="password" id="password" placeholder="Enter your password" />
              <button type="button" className="pw-toggle">
                {/* This is a placeholder, you'd add state to make it toggle */}
                <FaEyeSlash />
              </button>
            </div>
          </div>

          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <Link to="/location" className="sign-in-btn">
  SIGN IN
</Link>
        </form>

        <div className="create-account-link">
          Don't have an account? <a href="#">Create an account</a>
        </div>

        {/* 4. Social Sign In */}
        <div className="divider">
          <span>Or</span>
        </div>

        <div className="social-login">
          <button className="social-btn facebook">
            <FaFacebook className="social-icon" />
            CONNECT WITH FACEBOOK
          </button>
          <button className="social-btn google">
            <FcGoogle className="social-icon" />
            CONNECT WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;