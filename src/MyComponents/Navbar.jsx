import React, { useState } from "react";
import './Navbar.css'
import ImageComponent from "../MyComponents/ImageComponent"
import { Link } from "react-router-dom";


export default function Navbar() {
  const [home , SetHome] = useState(false)
  const handleClick = () =>{
    SetHome(true)
  }
  return <div >
    <header>
      <h2 onClick={handleClick} className="heading">My Gallery</h2>
      <nav>
        <ul>
        <li><Link to={`${process.env.PUBLIC_URL}/Image-Gallery`}>Home</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/about`}>About</Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link></li>


          {/* <li><Link to="Image-Gallery">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
    {home && <ImageComponent/>}
  </div>;
}
