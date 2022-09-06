import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import './App.css'
import Error from "./Components/Error/Error";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="background ">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />}></Route>
         <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="*" element={<Error />}></Route>
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
