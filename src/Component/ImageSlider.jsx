import React from "react";
import { Data } from "../data/data";
import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <div className="container">
      <div className="main">
        <i class="bi bi-arrow-right-circle"></i>
        <div className="wrapper">
          {Data.map((e, index) => (
            <div key={index} className="content">
              <img src={e.image} alt={`slide${e.slide}`} width="100%" />
            </div>
          ))}
        </div>
        <i class="bi bi-arrow-left-circle"></i>
      </div>
    </div>
  );
};

export default ImageSlider;
