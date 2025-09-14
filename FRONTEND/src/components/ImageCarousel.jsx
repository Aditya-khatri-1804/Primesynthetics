import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, autoSlide = true, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, autoSlide, interval]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <div className="carousel-slide">
        <img src={images[current]} alt={`Slide ${current + 1}`} />
      </div>
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageCarousel;
