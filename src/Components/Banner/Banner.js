import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './Banner.css'



const Banner = () => {
    return (
       
      <div class="hero  flex  justify-center align-middle gap-x-10 min-h-screen banner">
        <div className='text-3xl text-white mb-10'>
     <p><a href="https://www.facebook.com/Pobarulislam10/"><i class="fa-brands fa-facebook-f"></i></a></p>
    <p className='mt-4'> <a href="https://github.com/Pobarul-islam"><i class="fa-brands fa-github"></i></a></p>
    <p className='mt-4'> <a href="https://www.linkedin.com/in/md-pobarul-islam-04bb2b1b8/"><i class="fa-brands fa-linkedin-in"></i></a></p>
    <p className='mt-4'> <a href="https://twitter.com/pobarulislam10"><i class="fa-brands fa-twitter"></i></a></p>
        </div>

          <div className='ml-16 mb-24'>    
            <p className='text-4xl text-blue-100 font-bold'>Hi, I 'am <span className='text-white'>Pobarul</span> islam</p>
             <h2 className='text-left text-black text-1xl font-bold mt-3'><span className='text-white text-1xl'></span>
                    <span className='text-white text-left text-3xl font-bold'>
                        <TypeAnimation
      sequence={[
      'Front end developer',
        2000,
        'Web designer', 
        1000,
        'React developer',
        2000,
        'Web developer',
        2000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
     className=""
    />
      </span></h2> 
			 <p className='text-xl text-blue-100'> High level experience in web design <br /> and
			 development knowledge,
       Producing quality work.</p>
            
       <Link className='btn' to="/contacts">Contact</Link>
        </div>
        
         <div class="hero-content lg:flex-row-reverse img">
            <img className='bannerImg mb-44' src="https://i.ibb.co/pyHHr5v/pobarul-islam-removebg-preview.png" alt='Pobarul isalm Pictur'/>
          </div>
       
</div>
        
    );
};

export default Banner;