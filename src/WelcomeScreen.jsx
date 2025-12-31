import { Link } from 'react-router-dom';
import React from 'react';
import './WelcomeScreen.css';

// You will need to replace this with the actual path to your logo image
// I'm using a placeholder for now.
import logoImage from './pet-puja-logo.png'; 

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      
      {/* Logo and Title Section */}
      <div className="logo-section">
        <div className="logo-background-circle"></div>
        <span className="logo-text-hindi">पेट</span>
        
        {/* NOTE: I've added a placeholder logo. 
          You should download the real logo from Figma and
          replace 'logoImage' with your imported image.
        */}
        <img 
          src={logoImage} 
          alt="Pet Puja Logo" 
          className="logo-image" 
        />
        <span className="logo-text-english">Puja</span>
      </div>

      {/* Welcome Text Section */}
      <div className="welcome-text-section">
        <h1>Welcome</h1>
        <p>
          It's a pleasure to meet you. We are excited that you're here 
          so let's get started!
        </p>
      </div>

      {/* Button Section */}
      <div className="welcome-button-section">
        <Link to="/signin" className="get-started-btn">
  GET STARTED
</Link>
      </div>

    </div>
  );
};

export default WelcomeScreen;