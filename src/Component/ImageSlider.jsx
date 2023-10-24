import React, { useState } from "react";
import { Data } from "../data/data";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const slideStyle = {
    transform: `translateX(-${index * 100}%)`
  };

  return (
    <div className="container">
      <div className="main">
        <i className="bi bi-arrow-right-circle" onClick={handleNext}></i>
        <div className="wrapper" style={slideStyle}>
          {Data.map((e, idx) => (
            <div key={idx} className="content">
              <img src={e.image} alt={`slide${e.slide}`} width="100%" />
            </div>
          ))}
        </div>
        <i className="bi bi-arrow-left-circle" onClick={handlePrev}></i>
      </div>
    </div>
  );
};

export default ImageSlider;
