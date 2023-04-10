import Navbar from "./MyComponents/Navbar"
import ImageComponent from "./MyComponents/ImageComponent"
import './App.css';
import About from "./MyComponents/About";
import Contact from "./MyComponents/Contact";
import { Route, Routes, Link } from "react-router-dom"

function App() {

  return (
    <div className="App">
       <Navbar/>
       <Routes>
       <Route path="Image-Gallery" element={<ImageComponent />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
