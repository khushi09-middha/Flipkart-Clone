import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Filter = () => {
  return (
    <div
      className="_1YokD2 _3Mn1Gg col-2-12"
      style={{ flex: "0 0 280px", maxWidth: 280, padding: "0px 10px 0px 0px" }}
    >
      <div className="_1AtVbE col-12-12" style={{ padding: "0px 0px 10px" }}>
        <a
          href="/mens-tshirts/pr?sid=clo%2Cash%2Cank%2Cedy&p%5B%5D=facets.trend_markers%3D1&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJsYWNrIEZyaS1ZYXkgRmluZHMhIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=1K8QQR51GSZO_MERCH&otracker=bp_browse_announcement_clo%2Cash"
          className="UYS4aW _3E_YdP"
          data-tkid="M_ae778511-19fc-434f-b494-083613b054ed_4.1K8QQR51GSZO"
        />
        <div className="_3ywSr_">
          <div className="_1bEAQy _2iN8uD _312yBx">
            <img
              className="_2OHU_q _2WCh1J aA9eLq"
              alt="Spoyl-Mens T Shirts"
              src="https://rukminim2.flixcart.com/fk-p-flap/400/400/image/43a29fc06d62a752.jpg?q=50"
            />
          </div>
        </div>
        <div className="_2ssEMF filter-column ">
          <div className="_1sPNy4">
            <div className="_2LR_KO">Black Fri-Yay Finds!</div>
            <div className="tMzY0d">Men's Shirts From ₹100</div>
          </div>
        </div>
      </div>

      <div className="filter-column">
        <div className="filter-class">
          <p>
            <b>Filters</b>
          </p>
        </div>

        <div className="filter-categories">
          <div className="categorry-heading">
            <p>
              <b>CATEGORIES</b>
            </p>
          </div>
          <div>
            <div>
              <div className="category-sub-heading">
                <span className="material-symbols-outlined">chevron_right</span>
                <p> Clothing and Accessories</p>
              </div>
            </div>
          </div>
          <div>
            <div className="category-sub-heading">
              <span class="material-symbols-outlined">expand_more</span>

              <p> Topwear</p>
            </div>
            <div className="topwear">
              <p>Shirts</p>
              <p>T-Shirts</p>
              <p>Tops</p>
            </div>
          </div>
        </div>

        <div className="gender-section">
          <div className="gender-content">
            <p>GENDER</p>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
        </div>

        <div className="f-assured">
          <div className="f-assured-image">
            <img
              height={80}
              width={80}
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            />
          </div>

          <span class="material-symbols-outlined">help</span>
        </div>

        <div className="price-section">
          <p>PRICE</p>

          <div className="price-options">
            <select className="option-value ">
              <option value="Min">Min</option>
              <option value={300}>₹300</option>
              <option value={500}>₹500</option>
              <option value={700}>₹700</option>
              <option value={1000}>₹1000</option>
            </select>

            <div className="price-to">to</div>

            <select className="option-value ">
              <option value={300}>₹300</option>
              <option value={500}>₹500</option>
              <option value={700}>₹700</option>
              <option value={1000}>₹1000</option>
              <option value="Max">₹1000+</option>
            </select>
          </div>
        </div>

        <div className="brand-section">
          <div className="brand-content">
            <p>BRAND</p>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        <div className="offer-section">
          <div className="offer-content">
            <p>OFFERS</p>
            <span class="material-symbols-outlined">expand_less</span>
            
            
            
          </div>
          <div className="customer-offer-container">
              <input className="checkBox" type="checkbox" />

              <div className="offer-option">Free COD</div>
            </div>
            <div className="customer-offer-container">
              <input className="checkBox" type="checkbox" />

              <div className="offer-option">Special Price</div>
            </div>
        </div>

        <div className="discount-section">
          <div className="discount-content">
            <p>DISCOUNT</p>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
        </div>

        
        <div className="customer-rating-section">
          <div className="customer-rating-content">
            <p>CUSTOMER RATINGS</p>
            <span class="material-symbols-outlined">expand_less</span>
          </div>
          <div className="customer-offer-container">
              <input className="checkBox" type="checkbox" />

              <div className="customer-option">4★ &amp; above</div>
            </div>
            <div className="customer-offer-container">
              <input className="checkBox" type="checkbox" />

              <div className="customer-option">3★ &amp; above</div>
            </div>
        </div>
              
                   
            </div> 
      </div>

  );
};
export default Filter;
