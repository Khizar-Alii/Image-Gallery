import './Navbar.css'
import ImageComponent from "../MyComponents/ImageComponent"
import { Link } from "react-router-dom";


export default function Navbar() {
  return <div >
    <header>
      <Link to="/Image-Gallery"><h2 className="heading">My Gallery</h2></Link>
      <nav>
        <ul>
        <li><Link to={`/Image-Gallery`}>Home</Link></li>
        <li><Link to={`/Image-Gallery/about`}>About</Link></li>
        <li><Link to={`/Image-Gallery/contact`}>Contact</Link></li>
        </ul>
      </nav>
    </header>
    {/* <ImageComponent/> */}
  </div>;
}
