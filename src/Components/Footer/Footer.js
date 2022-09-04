import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content">
  <div>
    <Link className='text-2xl font-bold' to="/banner">Pobarul islam</Link>
   
  </div> 
  <div>
    <span class="footer-title">Social</span> 
    <div class="grid grid-flow-col text-3xl gap-4">
      <a href="https://www.linkedin.com/in/md-pobarul-islam-04bb2b1b8/"><i class="fa-brands fa-linkedin"></i></a> 
     <a href="https://www.facebook.com/Pobarulislam10/"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://twitter.com/pobarulislam10"><i class="fa-brands fa-twitter"></i></a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;