import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
   const menuItems = <>
        <li><Link to='/' className='font-bold'>Home</Link></li>
        <li><Link to="/about" className='font-bold'>About</Link></li>
        <li><Link to="/skills" className='font-bold'>Skills</Link></li>
        <li><Link to="/projects" className='font-bold'>Project</Link></li>
        <li><Link to='/blogs' className='font-bold'>Blogs</Link></li>
        <li><Link to='/contacts' className='font-bold'>Contacts</Link></li>
        
    </>
    return (
        <div>
            <div class="navbar ">
  <div class="navbar gap-4">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
            {menuItems}
            </ul>
    </div>
   <Link to="/"> <a class=" normal-case text-3xl font-bold text-white">Pobarul islam</a></Link>
  </div>
  <div class="navbar-center hidden text-white lg:flex">
   <ul className="menu menu-horizontal p-0">
            {menuItems}
            </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;