

import React from 'react';


const OneByThreeGrid = () => {
  const images = [
    './images/kent_grid.webp',
    '/images/sofas_grid.webp',
    '/images/realmeC55_grid.webp',
  ];

  return (
    <div className="one-by-three-grid">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image} alt={`Product ${index + 7}`} />
        </div>
      ))}
    </div>
  );
};

export default OneByThreeGrid;
