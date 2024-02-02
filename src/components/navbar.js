import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import LoginPage from "./login";
const Navbar = ({ isLoginPage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";


  const navigate = useNavigate();
  const [isLoginDropdown, setIsLoginDropdown] = useState(false);
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);

  const handleMouseOver = (dropdownType) => {
    if (dropdownType === "login") {
      setIsLoginDropdown(true);
    } else if (dropdownType === "otherDropdown") {
      
    }
  };
  const handleClickLogin = () => {
    setIsLoginPageVisible(true);
    navigate("/login");
    console.log("Login Clicked");
  };
  const handleLoginClose = () => {
    setIsLoginPageVisible(false);
  };
  const handleIconMouseOver = (item) => {
    if (item === "login") {
      
    }
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="./images/flipkart_logo.svg"
          alt="Flipkart Logo"
          className="logo"
        />
      </div>
      <div className="search-bar-container">
        <div className="search-icon">
          <img src="./images/search.png" alt="search icon" />
        </div>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="search-bar"
        />
      </div>
      <div className="menu">
        <div
          className={`menu-item ${isLoginDropdown ? "active" : ""}`}
          onClick={handleClickLogin}
          onMouseOver={() => handleMouseOver("login")}
          onMouseLeave={() => setIsLoginDropdown(false)}
        >
          <div className="login-wrapper">
  <div className="menu-item login-icon">
    <img
      src="./images/login.svg"
      alt="login user"
      className="menu-item-icon"

      onMouseOver={() => handleIconMouseOver("login")}
    />
    Login
    <span className="material-symbols-outlined menu-item-icon" >
      
      {isLoginDropdown ? 'expand_more' : 'keyboard_arrow_up'}
    </span>
  </div>
  
</div>



          {isLoginDropdown && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <div className="dropdown-sub-item">
                  New customer? <b> Signup</b>
                </div>
                <hr />
                <div className="dropdown-sub-item">
                  {" "}
                  <img 
                    src="./images/my_profile.svg"
                    alt="My Profile"
                    width="24"
                    height="24"
                    className="bi bi-custom-icon"
                  />{" "}
                  My Profile
                </div>
                <div className="dropdown-sub-item">
                  {" "}
                  <img
                    src="./images/fkplus.svg"
                    alt="fkplus"
                    width="24"
                    height="24"
                    className="bi bi-custom-icon"
                  />{" "}
                  Flipkart Zone Plus
                </div>
                <div className="dropdown-sub-item">
                  {" "}
                  <img
                    src="./images/orders.svg"
                    alt="orders"
                    width="24"
                    height="24"
                    className="bi bi-custom-icon"
                  />{" "}
                  Orders
                </div>
                <div className="dropdown-sub-item">
                  {" "}
                  <img
                    src="./images/wishlist.svg"
                    alt="wishlist"
                    width="24"
                    height="24"
                    className="bi bi-custom-icon"
                  />{" "}
                  Wishlist
                </div>
                <div className="dropdown-sub-item">
                  {" "}
                  <img
                    src="./images/rewards.svg"
                    alt="rewards"
                    width="24"
                    height="24"
                    className="bi bi-custom-icon"
                  />{" "}
                  Rewards
                </div>
                <div className="dropdown-sub-item">
                  {" "}
                  <img
                    src="./images/giftCard.svg"
                    alt="giftCard"
                    width="24"
                    height="24"
                    className="bi bi-custom-icon"
                  />{" "}
                  Gift Cards
                </div>
              </div>
            </div>
          )}
        </div>


        <div className="menu-item">
          <img src="./images/cart.svg" alt="cart" className="menu-item-icon"/>
          Cart
        </div>
        
        <div className="menu-item">
          <img
            src="./images/become_seller.svg" 
            alt="Become a Seller"
            className="menu-item-icon"
            
          />
          Become a Seller
        </div>
        <div
          className="menu-item dropdown"
          onMouseOver={() => handleMouseOver("otherDropdown")}
        >
          <span className="dropdown-icon">⋮</span>
          <div className="dropdown-content second">
            <div className="dropdown-sub-item">
              {" "}
              <img
                src="./images/notification_prefrences.svg"
                alt="Notificay"
                width="24"
                height="24"
                className="bi bi-custom-icon"
              />{" "}
              Notification prefrences
            </div>
            <div className="dropdown-sub-item">
              {" "}
              <img
                src="./images/helpcenter.svg"
                alt="CustomerCare"
                width="24"
                height="24"
                className="bi bi-custom-icon"
              />{" "}
              Customer Care
            </div>
            <div className="dropdown-sub-item">
              {" "}
              <img
                src="./images/advertise.svg"
                alt="Advertise"
                width="24"
                height="24"
                className="bi bi-custom-icon"
              />{" "}
              Advertise
            </div>
            <div className="dropdown-sub-item">
              {" "}
              <img
                src="./images/download_App.svg"
                alt="DownloadApp"
                width="24"
                height="24"
                className="bi bi-custom-icon"
              />{" "}
              Download App
            </div>
          </div>
        </div>
      </div>
      {isLoginPageVisible && (
        <div className="login-overlay">
          <LoginPage onClose={handleLoginClose} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
