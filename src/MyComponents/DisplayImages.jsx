import React, { useState } from "react";
import "./DisplayImages.css";
import IndiviualImage from "./IndiviualImage";
import { Link } from "react-router-dom";


const DisplayImages = ({ images }) => {
  const [selectImg , setSelectImg] = useState(null)
  const handleClick = (e) =>{
    setSelectImg(e.target.src)
  }
  return (
    <div className="container">
      {images.map((item) => {
        return (
          <div className="content" key={item.id}>
            <h2>{item.title}</h2>
            <Link to='/Image-Gallery/indiviualimg'><img onClick={handleClick} src={item.url} alt={item.title} /></Link>
          </div>
        );
      })}
      <IndiviualImage selectImg = {selectImg} />
    </div>
  );
};

export default DisplayImages;
