import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiFacebook } from 'react-icons/fa';


const Banner = () => {
    return (
       
      <div class="hero  flex gap-36 justify-center align-middle banner">
        <div className='text-3xl mt-16'>
     <p> <a href=""><i class="fa-brands fa-facebook-f"></i></a></p>
    <p className='mt-4'> <a href=""><i class="fa-brands fa-github"></i></a></p>
    <p className='mt-4'> <a href=""><i class="fa-brands fa-linkedin-in"></i></a></p>
    <p className='mt-4'> <a href=""><i class="fa-brands fa-twitter"></i></a></p>
        </div>

          <div className='ml-16 mt-10'>    
            <h1 className='text-4xl font-bold'>Hi, I 'am Pobarul islam</h1>
             <h2 className='text-left text-black text-1xl font-bold mt-3'><span className='text-orange-400 text-1xl'></span>
                    <span className='text-orange-400 text-left text-3xl font-bold'>
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
			 <p className='mt-5 text-xl'> High level experience in web design <br /> and
			 development knowledge,
       Producing quality work.</p>
            
  <a className='btn' href="https://drive.google.com/file/d/1vMocrk7GDH9jPH7nmScgYGgP52iG3bP4/view?usp=sharing" class="btn btn-primary mt-5">Download resume</a>
        </div>
        
         <div class="hero-content lg:flex-row-reverse  img">
            <img src="https://i.ibb.co/pyHHr5v/pobarul-islam-removebg-preview.png" class="max-w-sm rounded-lg" alt='Pobarul isalm Pictur'/>
          </div>
       
</div>
        
    );
};

export default Banner;