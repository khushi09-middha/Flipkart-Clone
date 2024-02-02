

import React from 'react';


const ImageGrid = () => {
  const images = [
    './images/realme_grid.webp',
    './images/poco_grid.webp',
    './images/vivo_grid.webp',
    './images/kitchen_grid.webp',
    './images/electronics_grid.webp',
    './images/geyser_grid.webp',
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image} alt={`Product ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
