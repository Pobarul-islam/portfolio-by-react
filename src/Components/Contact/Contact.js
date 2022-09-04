import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gofjtm', 'template_kfckaeh', form.current, 'H0PHL1d5uPDX351g0')
      .then((result) => {
        console.log(result.text);
        console.log("message sended")
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className='mt-5'>
            <h2 className='text-4xl font-bold text-center'>Contact</h2>
            <div class=" container ml-10 mt-10">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            If you fill all the fields in this form and send an email, we will contact you within 24 hours !
          </p>

          <div class="info">
            <div class="information gap-2">
                 
              <i class="fa-solid fa-location-dot"></i>
              <p>Thakurgaon, Bangladesh, 5102</p>
            </div>
            <div class="information gap-2">
                
              <i class="fa-solid fa-envelope"></i>
              <p>pobarul.islam10@gmail.com</p>
              
            </div>
            <div class="information gap-2">
             <i class="fa-solid fa-phone"></i>
              <p>+8801721620738</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/Pobarulislam10">
                <i class="fab fa-facebook-f"></i>
              </a>
             <a href=" https://github.com/Pobarul-islam"><i className="fa-brands ml-3 ease-in duration-300  fa-github"></i></a>
              <a href="https://www.linkedin.com/in/md-pobarul-islam-04bb2b1b8/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form ref={form} onSubmit={sendEmail} autoComplete="off" >
            <h3 class="title">Contact us</h3>
            <div  class="input-container">
              <input type="text" name="user_name" class="input" placeholder='Name'/>
            
            </div>
            <div class="input-container">
              <input type="email" name="user_email" class="input" placeholder='Email'/>
              
            </div>
            <div class="input-container">
              <input type="tel" name="user_phone" class="input" placeholder='Phone'/>
             
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;