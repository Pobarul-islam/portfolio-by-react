import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from "./Components/Skills/Skills";



function App() {
  return (
    <div className="">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
    
      </Routes>
    </div>
  );
}

export default App;
