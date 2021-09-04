import React, { useState } from 'react';

import locationIcon from '../img/location.svg';
import phoneIcon from '../img/phone.svg';
import emailIcon from '../img/email.svg';
import "./Contact.css";

const Contact = () => {
  const [firstName,lastName, setFirstName,setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div id="contact">
     <div className="container_left">
       <div className="container_left__heading">
              
         <h1>Contact Us</h1>
     <h6>Fill up the form and our team will get back to you within 24 hours</h6>
     </div>
     <div className="container_left__iconsBox">
       <div className="container_left__icons">
         <img className="icon" src={phoneIcon}/>
         <h5>12345678
         </h5>
       </div>
       <div className="container_left__icons">
         <img className="icon" src={emailIcon}/>
         <h5>  hello@gmail
         </h5>
       </div>
       <div className="container_left__icons">
         <img className="icon" src={locationIcon}/>
         <h5>Delhi
         </h5>
       </div>
     </div>



     </div>
      <div className="container-right">
       
          <div className="contact-form">
            <form className="form">
              <div className="inputField"> 
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              </div >
              <div className="inputField">
                <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              </div>
              <div className="inputField">
                <label>Phone</label>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              </div>
              <div className="inputField">
                <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              <div className="inputField">
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              </div>
              <button type="submit" className="contact__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default Contact;
