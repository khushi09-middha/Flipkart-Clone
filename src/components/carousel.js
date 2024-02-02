import React, { useState, useEffect} from "react";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
   
      setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 3000); 

    return () => clearInterval(interval);

  }, []); 

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel-container">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={activeSlide === 0 ? "active" : ""}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className={activeSlide === 1 ? "active" : ""}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className={activeSlide === 2 ? "active" : ""}
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
            <img className="slides" src="./images/slide 1.webp" alt="First slide" />
          </div>
          <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
            <img className="slides" src="./images/slide 2.webp" alt="Second slide" />
          </div>
          <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
            <img className="slides" src="./images/slide 3.webp" alt="Third slide" />
          </div>
          <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
            <img className="slides" src="./images/slide 4.webp" alt="Third slide" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
   
  );
  
}

export default Carousel;
