import Navbar from "./MyComponents/Navbar"
import ImageComponent from "./MyComponents/ImageComponent"
import './App.css';
import About from "./MyComponents/About";
import Contact from "./MyComponents/Contact";
import { Route, Routes } from "react-router-dom"
import './index.css'
import DisplayImages from "./MyComponents/DisplayImages";
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
  {
    id: 31,
    title: "Image 10",
    url: "https://picsum.photos/id/10/300/200",
    category: "Animals"
  },
  {
    id: 32,
    title: "Image 11",
    url: "https://picsum.photos/id/11/300/200",
    category: "Architecture"
  },
  {
    id: 33,
    title: "Image 12",
    url: "https://picsum.photos/id/12/300/200",
    category: "Architecture"
  },
  {
    id: 34,
    title: "Image 13",
    url: "https://picsum.photos/id/13/300/200",
    category: "Architecture"
  },
  {
    id: 35,
    title: "Image 14",
    url: "https://picsum.photos/id/14/300/200",
    category: "Architecture"
  },
  {
    id: 36,
    title: "Image 15",
    url: "https://picsum.photos/id/15/300/200",
    category: "Architecture"
  },
  {
    id: 37,
    title: "Image 16",
    url: "https://picsum.photos/id/16/300/200",
    category: "Food"
  },
  {
    id: 38,
    title: "Image 17",
    url: "https://picsum.photos/id/17/300/200",
    category: "Food"
  },
  {
    id: 39,
    title: "Autumn Leaves",
    url: "https://picsum.photos/id/1015/200/300",
    category: "Nature"
  },
  {
    id: 40,
    title: "Cityscape",
    url: "https://picsum.photos/id/1025/200/300",
    category: "City"
  },
  {
    id: 41,
    title: "Mountain View",
    url: "https://picsum.photos/id/1042/200/300",
    category: "Nature"
  },
  {
    id: 42,
    title: "Sunset on the Beach",
    url: "https://picsum.photos/id/1050/200/300",
    category: "Nature"
  },
  {
    id: 43,
    title: "Night Sky",
    url: "https://picsum.photos/id/1064/200/300",
    category: "Space"
  },
  {
    id: 44,
    title: "Old Town",
    url: "https://picsum.photos/id/1074/200/300",
    category: "City"
  },
  {
    id: 45,
    title: "Green Forest",
    url: "https://picsum.photos/id/1082/200/300",
    category: "Nature"
  },
  {
    id: 46,
    title: "Waterfall",
    url: "https://picsum.photos/id/1084/200/300",
    category: "Nature"
  },
  {
    id: 47,
    title: "City Night Lights",
    url: "https://picsum.photos/id/109/200/300",
    category: "City"
  },
  {
    id: 48,
    title: "Snowy Mountains",
    url: "https://picsum.photos/id/110/200/300",
    category: "Nature"
  },
  {
    id: 49,
    title: "Futuristic City",
    url: "https://picsum.photos/id/111/200/300",
    category: "City"
  },
  {
    id: 50,
    title: "Sunrise on the Beach",
    url: "https://picsum.photos/id/112/200/300",
    category: "Nature"
  },
  {
    id: 51,
    title: "Star Trails",
    url: "https://picsum.photos/id/113/200/300",
    category: "Space"
  },
  {
    id: 52,
    title: "Green Mountains",
    url: "https://picsum.photos/id/114/200/300",
    category: "Nature"
  },
  {
    id: 53,
    title: "City at Night",
    url: "https://picsum.photos/id/115/200/300",
    category: "City"
  },
  {
    id: 54,
    title: "Aurora Borealis",
    url: "https://picsum.photos/id/116/200/300",
    category: "Nature"
  }
];


function App() {

  return (
    <div className="App">
       <Navbar/>
       <Routes>
       <Route path="/Image-Gallery" element={<ImageComponent />} />
       <Route path="/Image-Gallery/about" element={<About />} />
       <Route path="/Image-Gallery/contact" element={<Contact />} />
       <Route path="/Image-Gallery/displayImg" element={<DisplayImages images={images}/>} />
       <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
