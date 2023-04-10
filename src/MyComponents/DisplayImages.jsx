import React, { useState } from "react";
import "./DisplayImages.css";
import IndiviualImage from "./IndiviualImage";


const DisplayImages = ({ images }) => {
  const [selectImg , setSelectImg] = useState(null)
  const [showImg, setShowImg] = useState();
  const [showAllImages, setshowAllImages] = useState(true);


  const handleClick = (e) =>{
    setSelectImg(e.target.src)
    e.stopPropagation()
    setShowImg(true)
    setshowAllImages(false)
  }
  return (
    <div className="container">
      {images.map((item) => {
        return (
          (showAllImages && <div className="content" key={item.id}>
            <h2>{item.title}</h2>
             <img onClick={handleClick} src={item.url} alt={item.title} />
          </div>)
        );
      })}
      {showImg && <IndiviualImage selectImg = {selectImg} images = {images}/>}
    </div>
  );
};

export default DisplayImages;
