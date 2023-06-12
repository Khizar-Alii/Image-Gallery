import "./DisplayImages.css";
import { Link } from "react-router-dom";
const DisplayImages = ({ images }) => {
  return (
    <div className="container">
      {images.map((item) => {
        return (
          <div className="content" key={item.id}>
            <h2>{item.title}</h2>
            <Link to='/Image-Gallery/indiviualimg'><img src={item.url} alt={item.title} /></Link>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayImages;
