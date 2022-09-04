import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div>
           <div class="flex-container">
  <div class="text-center">
    <h1>
      <span class="fade-in" id="digit1">4</span>
      <span class="fade-in" id="digit2">0</span>
      <span class="fade-in" id="digit3">4</span>
    </h1>
    <h3 class="fadeIn">PAGE NOT FOUND</h3>
<span className='btn btn-white'>  <Link to='/' className='font-bold'>Back To Home</Link></span>
  </div>
</div>
        </div>
    );
};

export default Error;