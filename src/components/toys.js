import React from "react";
import Navbar from "./navbar";
import Filter from "./filter";
import Footer from "./footer";

const ToysItems=()=>{
  const products = [
    {
      id: 1,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/musical-toy/y/n/y/kids-dancing-talking-cactus-toys-for-baby-boys-and-girls-120-original-imagrb34ctudsjg6.jpeg?q=70",
      title: "Dancing Cactus",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
      id: 2,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/z/v/i/monster-truck-cars-push-and-go-toy-trucks-friction-4-wheel-drive-original-imaghwythje2wg5w.jpeg?q=70", 
      title: "Titirangi Tractor",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
      id: 3,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-remote-control-toy/l/l/k/exceed-helicopter-with-remote-control-charging-helicopter-toys-original-imaguwykuh8agjxy.jpeg?q=70" ,
      title: "Remote Control Helicopter",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
        id: 4,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/puzzle/9/w/a/40-step-by-step-puzzle-40-piece-wild-animal-jigsaw-puzzle-original-imagvfqskzvfgcuh.jpeg?q=70" ,
        title: "Skillmatics Step by Step Puzzle",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 5,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/block-construction/l/o/i/125-pcs-building-block-toy-for-kids-smart-activity-fun-learning-original-imagk6zgkfapmjz3.jpeg?q=70" ,
        title: "Building blocks kit for kids",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 6,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/outdoor-toy/n/f/5/-original-imagnbtsf8gzdgg7.jpeg?q=70" ,
        title: "Little Olive Enduro Scooter for kids",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 7,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/l186t8w0/shopsy-learning-toy/6/s/p/kidstablet-geetika-original-imagctwxu6tehjc8.jpeg?q=70" ,
        title: "Toyporium LCD Writing 8.5 Inch Tablet Electronic Writing & Drawing Doodle Board",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 8,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/k6v2ykw0/electric-ride-on/a/h/z/51145-toyzone-original-imafp8d4hfsjw2ed.jpeg?q=70" ,
        title: "Toyzone Eco Panda Ride On Panda609 Tricycle ",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 9,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/l1jmc280/stuffed-toy/k/v/b/stuffed-toy-505-25-champshade-original-imagd3542xbhgczw.jpeg?q=70" ,
        title: "Stuffed Toy Teddy",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 10,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/ktrk13k0/learning-toy/u/i/7/8-5-inch-e-writing-tablet-drawing-board-doodle-board-writing-pad-original-imag7fpfd7zrrh95.jpeg?q=70" ,
        title: "HALLSTATT 8.5 Inch E Writing Tablet",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 11,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/block-construction/7/i/e/good-quality-wooden-domino-run-board-building-blocks-educational-original-imagrh3mhhhrnjd6.jpeg?q=70" ,
        title: "J K INTERNATIONAL Good Quality Wooden Domino Run Board Building Blocks Educational Toys ",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 12,
        imageSrc: "https://rukminim2.flixcart.com/image/416/416/l4x2rgw0/role-play-toy/a/c/l/walkie-talkie-communication-interphone-2-way-radio-toy-with-up-original-imagfpshkrhd4ht6.jpeg?q=70" ,
        title: "World of baby Walkie Talkie for Kids | Waki Taki with 10 Meter Outdoor Range",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      }
    
];
    return(
        <div>
            <Navbar />
            <div className="toys-container">
        <Filter />
            <div className="_1AtVbE col-12-12">
  <div className="_3WcRHs" data-tkid="M_ff470d98-de06-4c87-bf00-e95785809815_2">
    <div className="_3ywSr_">
      <div className="_1bEAQy _2iN8uD _312yBx">
        <img
          className="_2OHU_q aA9eLq"
          alt="Toys and Games "
          src="https://rukminim2.flixcart.com/flap/2000/2000/image/8b47baf62c750349.jpg?q=50"
          data-tkid="M_ff470d98-de06-4c87-bf00-e95785809815_2.AQN6SC70C27G"
        />
        <img
          className="_2OHU_q aA9eLq"
          alt="90Z2FKY2VJET"
          src="https://rukminim2.flixcart.com/flap/2000/2000/image/69f7a10d8dd13401.jpg?q=50"
          data-tkid="M_ff470d98-de06-4c87-bf00-e95785809815_8.BITDVBG1G2M5"
        />
        <div
  className="_1YokD2 _2GoDe3 col-12-12"
  style={{ backgroundColor: "rgb(255, 255, 255)", alignItems: "flex-end" }}
>
  <div className="_1AtVbE" style={{ flexGrow: 1, overflow: "auto" }}>
    <div className="W_R1IA">
      <div className="_1MR4o5">
        <div className="_3GIHBu">
          <a href="/" className="_2whKao">
            Home
          </a>
          <svg
            width={16}
            height={27}
            viewBox="0 0 16 27"
            xmlns="http://www.w3.org/2000/svg"
            className="_39X-Og"
          >
            <path
              d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
              fill="#fff"
              className="DpXnhQ"
            />
          </svg>
        </div>
        <div className="_3GIHBu">
          <a className="_2whKao" href="/toys/pr?sid=tng&marketplace=FLIPKART">
            Toys and Games
          </a>
          <svg
            width={16}
            height={27}
            viewBox="0 0 16 27"
            xmlns="http://www.w3.org/2000/svg"
            className="_39X-Og"
          >
            <path
              d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
              fill="#fff"
              className="DpXnhQ"
            />
          </svg>
        </div>
      </div>
      <span className="_10Ermr">
        Showing 1 – 40 of 6,76,010 results for "<span>toys</span>"
      </span>
      <div className="_5THWM1">
        <span className="_2i7N3j">Sort By</span>
        <div className="_10UF8M _3LsR0e">Relevance</div>
        <div className="_10UF8M">Popularity</div>
        <div className="_10UF8M">Price -- Low to High</div>
        <div className="_10UF8M">Price -- High to Low</div>
        <div className="_10UF8M">Newest First</div>
      </div>
      <div className="electronics-content">
          {products.map((product) => (
            <div className="electronics-essentials" key={product.id}>
              <div className="electronics-box">
                <img className="_2r_T1I" alt="" src={product.imageSrc} />
              </div>
              <div className="product-details">
                <h3>{product.title}</h3>
                <div className="price-container">
                  <span className="discounted-price">{product.discountedPrice}</span>
                  <span className="original-price">{product.originalPrice}</span>
                  <span className="discount-percentage">{product.discountPercentage}</span>
                </div>
                <p>{product.offer}</p>
              </div>
            </div>
          ))}
        </div>


    </div>
  </div>
</div>


      
      </div>
    </div>
  </div>

  






</div>
</div>
            <Footer />
        </div>
    )
}
export default ToysItems;