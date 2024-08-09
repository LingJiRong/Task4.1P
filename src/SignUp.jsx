import React from 'react';
import './SignUp.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-header">SIGN UP FOR OUR DAILY INSIDER</h2>
      <div className="signup-form">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="email-input"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Signup;


