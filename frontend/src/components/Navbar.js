import React from 'react';
import logo from '../img/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="ECell NSUT" className="round-img logo" />
        <h1>ECell-Incubation</h1>
      </div>
      <ul>
        <li>
          <a href="#landing">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
