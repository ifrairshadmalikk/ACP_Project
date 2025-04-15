// pages/WelcomeScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
 // CSS styles (add background, overlay, etc.)

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container-bg">
      <video autoPlay muted loop className="background-video">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
      </video>

      <div className="welcome-overlay">
        <div className="welcome-box">
          <h1>Welcome to Our Book Management System</h1>
          <h2>Your journey starts here</h2>
        </div>

        <div className="welcome-buttons">
          <button className="login-button" onClick={() => navigate("/login")}>Login</button>
          <button className="signup-button" onClick={() => navigate("/signup")}>Signup</button>
        </div>

        <div className="get-started">
          <button onClick={() => navigate("/welcome-page")}>Get Started ➔</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;