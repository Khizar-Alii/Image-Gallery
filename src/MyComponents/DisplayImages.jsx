import React from "react";
import "./DisplayImages.css";

const DisplayImages = ({ images }) => {
  return (
    <div className="container">
      {images.map((item) => {
        return (
          <div className="content" key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.url} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayImages;
