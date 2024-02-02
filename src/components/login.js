
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import ImageSection from './imgsection';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="loginpage">
    <Navbar isLoginPage={true} />

    <div className="login-container">
      <ImageSection
        heading="Login"
        description="Get access to your Orders, Wishlist, and Recommendations"
        imageSrc="./images/image_section.png"
  
      />
      <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        
          <div className="signup-link">
  New to Flipkart?{' '}
  <Link to={{ pathname: '/signup', search: '?login=true' }}>Create an account</Link>
</div>

        </form>
      </div>
     

      <Footer />
    </div>
  );
};

export default LoginPage;
