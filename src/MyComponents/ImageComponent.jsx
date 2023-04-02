import DisplayImages from "./DisplayImages";
import "./ImageComponent.css";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    title: "Mountain View",
    url: "https://picsum.photos/id/1/800/600",
  },
  {
    id: 2,
    title: "Forest Trail",
    url: "https://picsum.photos/id/10/800/600",
  },
  {
    id: 3,
    title: "Beach Sunset",
    url: "https://picsum.photos/id/100/800/600",
  },
  {
    id: 4,
    title: "City Skyline",
    url: "https://picsum.photos/id/1000/800/600",
  },
  {
    id: 5,
    title: "Desert Road",
    url: "https://picsum.photos/id/1001/800/600",
  },
  {
    id: 6,
    title: "Snowy Mountains",
    url: "https://picsum.photos/id/1002/800/600",
  },
  {
    id: 7,
    title: "Autumn Leaves",
    url: "https://picsum.photos/id/1003/800/600",
  },
  {
    id: 8,
    title: "Calm Lake",
    url: "https://picsum.photos/id/1004/800/600",
  },
  {
    id: 9,
    title: "Vibrant Sunset",
    url: "https://picsum.photos/id/1005/800/600",
  },
  {
    id: 10,
    title: "Misty Forest",
    url: "https://picsum.photos/id/1006/800/600",
  },
  {
    id: 11,
    title: "Country Road",
    url: "https://picsum.photos/id/1008/800/600",
  },
  {
    id: 12,
    title: "Bridge Over River",
    url: "https://picsum.photos/id/1009/800/600",
  },
  {
    id: 13,
    title: "City Park",
    url: "https://picsum.photos/id/101/800/600",
  },
  {
    id: 14,
    title: "Foggy Lake",
    url: "https://picsum.photos/id/1011/800/600",
  },
  {
    id: 15,
    title: "Sunny Field",
    url: "https://picsum.photos/id/1012/800/600",
  },
  {
    id: 16,
    title: "Snowy Forest",
    url: "https://picsum.photos/id/1013/800/600",
  },
  {
    id: 17,
    title: "Waterfall",
    url: "https://picsum.photos/id/1015/800/600",
  },
  {
    id: 18,
    title: "Purple Sky",
    url: "https://picsum.photos/id/1016/800/600",
  },
  {
    id: 19,
    title: "Night City",
    url: "https://picsum.photos/id/1018/800/600",
  },
  {
    id: 20,
    title: "Snowy Mountainside",
    url: "https://picsum.photos/id/1019/800/600",
  },
  {
    id: "21",
    title: "Canyon View",
    url: "https://picsum.photos/id/31/800/600",
  },
  {
    id: "22",
    title: "Sunset Beach",
    url: "https://picsum.photos/id/32/800/600",
  },
  {
    id: "23",
    title: "Mountain Top",
    url: "https://picsum.photos/id/33/800/600",
  },
  {
    id: "24",
    title: "River Flow",
    url: "https://picsum.photos/id/34/800/600",
  },
  { id: "25", title: "Meadow", url: "https://picsum.photos/id/35/800/600" },
  {
    id: "26",
    title: "City Street",
    url: "https://picsum.photos/id/36/800/600",
  },
  {
    id: "27",
    title: "Autumn Forest",
    url: "https://picsum.photos/id/37/800/600",
  },
  {
    id: "28",
    title: "Snowy Mountain",
    url: "https://picsum.photos/id/38/800/600",
  },
  {
    id: "29",
    title: "Tropical Island",
    url: "https://picsum.photos/id/39/800/600",
  },
  {
    id: "30",
    title: "Sunrise",
    url: "https://picsum.photos/id/40/800/600",
  },
];

const ImageComponent = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showbtn, setshowbtn] = useState(true);
  const handleChange = () => {
    setShowGallery(true);
    setshowbtn(false);
  };
  return (
    <div className="ImageComponent">
      {showbtn && (
        <button className="button" onClick={handleChange}>
          Browse Gallery
        </button>
      )}
      {showGallery && <DisplayImages images={images} />}
    </div>
  );
};

export default ImageComponent;
