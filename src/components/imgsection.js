
import React from 'react';

const ImageSection = ({ heading, description, imageSrc }) => {
  return (
    <div className="image-section">
      <h2>{heading}</h2>
      <p>{description}</p>
      <img src={imageSrc} alt="Login Image" />
    </div>
  );
};

export default ImageSection;
