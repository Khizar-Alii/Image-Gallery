import React from "react";
import './Navbar.css'

export default function Navbar() {
  return <div >
    <header>
      <h2 className="heading">My Gallery</h2>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  </div>;
}
