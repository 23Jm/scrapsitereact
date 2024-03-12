import React, { useState } from 'react';
import './ImageCarousel.css'; // Import your CSS file for styling

const ImageCarousel = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlides = () => {
    let newIndex = startIndex + 4;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setStartIndex(newIndex);
  };

  const prevSlides = () => {
    let newIndex = startIndex - 4;
    if (newIndex < 0) {
      newIndex = images.length - 4;
    }
    setStartIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlides}>&#10094;</button>
      <button className="next" onClick={nextSlides}>&#10095;</button>
      <div className="image-container">
        {images.slice(startIndex, startIndex + 4).map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${startIndex + index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
