import { Link } from "react-router-dom";
import "./ImageComponent.css";
const ImageComponent = () => {

  return (
    <div className="ImageComponent">
        <button className="button">
          <Link to='/Image-Gallery/displayImg'>Browse Gallery</Link>
        </button>
    </div>
  );
};

export default ImageComponent;
