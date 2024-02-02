import React , {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import "../styles.css";

const CategorySection = () => {
  const navigate = useNavigate();

  const handleSmartphonesClick = () => {
    
    navigate('/smartphones');
  };
  const handleElectronicsClick = () => {
    
    navigate('/electronicsitem');
  };
  const handleGroceryClick = () => {
    
    navigate('/groceryitem');
  };
  const handleFashionClick = () => {
    
    navigate('/fashionitems');
  };
  const handleFurnitureClick = () => {
    
    navigate('/furnitureitems');
  };
  const handleApplianceClick = () => {
    
    navigate('/appliances');
  };
  const handleTravelClick = () => {
    
    navigate('/travel');
  };
  const handleToysClick = () => {
    
    navigate('/toys');
  };
  const handleTwoWheelersClick = () => {
    
    navigate('/twowheelers');
  };

  
  return (
    <div className="category-section"
>
      <div className="category-item" onClick={handleGroceryClick}>
        <img src="./images/grocery.png" alt="Grocery" />
        <span>Grocery</span>
        <div className="dropdown">
          
        </div>
      </div>

      <div className="category-item" onClick={handleSmartphonesClick}>
      
        <img src="./images/smartphones.png" alt="Mobile" />
        <span>Smartphones</span>
        
        <div className="dropdown">
         
        </div>
      </div>

      <div className="category-item" onClick={handleFashionClick}>
        <img src="./images/fashion.png" alt="Fashion" />
        <span>Fashion</span>
        <div className="dropdown">
         
        </div>
      </div>
      <div className="category-item" onClick={handleElectronicsClick}>
        
        <img src="./images/electronics.png" alt="Electronics" />
        <span>Electronics</span>
        <div className="dropdown">
          </div>
      </div>

        
   
      
      <div className="category-item"  onClick={handleFurnitureClick}>
        <img src="./images/home-appliance.png" alt="Home-appliance" />
        <span>Home & Furniture</span>
        <div className="dropdown">
         
        </div>
      </div>
      <div className="category-item" onClick={handleApplianceClick}>
        <img src="./images/furniture.png" alt="Furniture" />
        <span>Appliances</span>
        <div className="dropdown">
         
        </div>
      </div>
      <div className="category-item" onClick={handleTravelClick}>
        <img src="./images/travel.png" alt="Travel" />
        <span>Travel</span>
        <div className="dropdown">
         
        </div>
      </div>
      <div className="category-item" onClick={handleToysClick}>
        <img src="./images/toys.png" alt="Toys" />
        <span>Beauty, toys & more</span>
        <div className="dropdown">
         
        </div>
      </div>
    
      <div className="category-item" onClick={handleTwoWheelersClick}>
        <img src="./images/two_wheeler.png" alt="Two Wheelers" />
        <span>Two-Wheelers</span>
        <div className="dropdown">
         
        </div>
      </div>
      
    </div>
  );
};

export default CategorySection;
