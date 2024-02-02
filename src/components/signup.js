import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import ImageSection from './imgsection';

const SignupPage = () => {
  const location = useLocation();
  const isLoginPage = new URLSearchParams(location.search).get('login') === 'true';

 
  const [formData, setFormData] = useState({ username: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signuppage">
      <Navbar />
      <div className="signup-container">
      <ImageSection
    heading="Looks like you are new here!"
    description="Signup with your mobile number and get started"
    imageSrc="./images/image_section.png"
     
  />
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="mobile-number">Mobile no:</label>
          <input
            type="text"
            id="username"
            name="username"

            value={formData.username}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>

          <div className="login-link">
            Already a user?{' '}
            <Link to={{ pathname: '/login', search: 'login' }}>Login</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
