import React, { useState } from "react";
import DisplayImages from "./DisplayImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./IndiviualImage.css";

const IndiviualImage = ({ selectImg, images }) => {
  const [goBack, setGoBack] = useState(false);
  const [allImg, setAllImg] = useState(true);
  const [showbtn, setshowbtn] = useState(true);
  const handleClick = () => {
    setAllImg(false);
    setGoBack(true);
    setshowbtn(false);
  };
  return (
    <div className="image-container">
      {allImg && (
        <div className="image-wrapper">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow left"
            onClick={() => console.log("Previous Image")}
          />
          <img className="image" src={selectImg} alt="Selected image" />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow right"
            onClick={() => console.log("Next Image")}
          />
        </div>
      )}
      {showbtn && (
        <button className="button" onClick={handleClick}>
          Go Back
        </button>
      )}
      {goBack && <DisplayImages images={images} />}
    </div>
  );
};

export default IndiviualImage;
