import React, { useState, useEffect } from "react";
import "./CardCarousel.css"; // Import your CSS file for styling

const CardCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // Interval time in milliseconds
  const nextCard = () => {
    // Update currentIndex to display the next card
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Start automatic scrolling when the component mounts
    const intervalId = setInterval(() => {
      nextCard();
    }, intervalTime);

    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, ); // Re-run effect when currentIndex or intervalTime changes


  return (
    <div className="card-carousel">
      <div className="cards-wrapper">
        {/* Map through the images array to render the cards */}
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? "card slide-in" : "card"}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
