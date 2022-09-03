import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";



function App() {
  return (
    <div className="bg-gray-300">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Home />} />
    
      </Routes>
    </div>
  );
}

export default App;
