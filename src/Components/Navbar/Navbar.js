import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
   const menuItems = <>
        <li><Link to='/' className='font-bold'>Home</Link></li>
        <li><a href='/about' className='font-bold'>About</a></li>
        <li><a href='/skill' className='font-bold'>Skill</a></li>
        <li><a href='/projects' className='font-bold'>Project</a></li>
        <li><Link to='/blogs' className='font-bold'>Blogs</Link></li>
        <li><Link to='/contacts' className='font-bold'>Contacts</Link></li>
        
    </>
    return (
        <div>
            <div class="navbar ">
  <div class="navbar">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
            {menuItems}
            </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl text-black">Pobarul islam</a>
  </div>
  <div class="navbar-center hidden lg:flex">
   <ul className="menu menu-horizontal p-0">
            {menuItems}
            </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;