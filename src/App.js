import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import './App.css'
import Error from "./Components/Error/Error";


function App() {
  return (
    <div className="background">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/contacts" element={<Contact />}></Route>
       <Route path="*" element={<Error/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
