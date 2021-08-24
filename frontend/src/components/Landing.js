import React from 'react';
import { useGlobalContext } from '../context';

const Landing = () => {
  const { setFormVisible } = useGlobalContext();

  return (
    <div id="landing" className="container">
      <div className="showcase-content py-3">
        <h1 className="x-large">
          <span>Start</span>, <span>raise</span> and <span>grow</span> faster
          with ECell NSUT
        </h1>
        <p className="lead">the ultimate solution for your startup</p>
      </div>
      <div className="showcase-buttons">
        <button className="btn" onClick={() => setFormVisible(true)}>
          Get Started
        </button>
        <a href="#contact" className="btn btn-light">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Landing;
