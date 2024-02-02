
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import "./styles.css"; 
import CategorySection from "./components/category_section";
import Banking from "./components/banking";
import TopStories from "./components/top_stories";
import FlipkartDescription from "./components/flipkart_description";
import ImageGrid from "./components/grid1";
import OneByThreeGrid from "./components/grid2";
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import PhonesAndTablets from "./components/phone&tablets";
import ElectronicsItem from "./components/electronics";
import GroceryItem from "./components/grocery";
import FashionItems from "./components/fashion";
import FurnitureItems from "./components/furniture";
import ApplianceItems from "./components/appliance";
import TravelItems from "./components/travel";
import ToysItems from "./components/toys";
import TwoWheelerItems from "./components/two_wheelers";
import Filter from "./components/filter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategorySection />
      <Carousel/>
      <Banking />
      <ImageGrid />
      <OneByThreeGrid />
      <TopStories />
      <FlipkartDescription />
      <Footer />
    </div>
  );
};
const FilterPage=()=>{
  return(
    <div>
      {<Filter/>}
    </div>
  )
  }

const PhonesAndTabletsPage = () => {
  return (
    <div>
     
      {<PhonesAndTablets />}
      
    </div>
  );
};
const Electronics=()=>{
  return(
    <div>
      {<ElectronicsItem />}
    </div>
  )
}
const Grocery=()=>{
  return(
    <div>
      {<GroceryItem />}
    </div>
  )
}
const Fashion=()=>{
  return(
    <div>
      {<FashionItems/>}
    </div>
  )
}
const FurniturePage = () => { 
  return (
    <div>
      {<FurnitureItems />}
    </div>
  );
};
const Appliances = () => { 
  return (
    <div>
      {<ApplianceItems/>}
    </div>
  );
};
const Travel = () => { 
  return (
    <div>
      {<TravelItems/>}
    </div>
  );
};
const Toys = () => { 
  return (
    <div>
      {<ToysItems/>}
    </div>
  );
};
const TwoWheeler = () => { 
  return (
    <div>
      {<TwoWheelerItems/>}
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/smartphones" element={<PhonesAndTabletsPage />} />
        <Route path="/electronicsitem" element={<Electronics />} />
        <Route path="/groceryitem" element={<Grocery/>} />
        <Route path="/fashionitems" element={<Fashion />} />
        <Route path="/furnitureitems" element={<FurniturePage />} />
        <Route path="/appliances" element={<Appliances/>} />
        <Route path="/travel" element={<Travel/>} />
        <Route path="/toys" element={<Toys/>} />
        <Route path="/twowheelers" element={<TwoWheeler/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
