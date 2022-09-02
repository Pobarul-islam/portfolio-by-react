import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
    </div>
  );
}

export default App;
