import React from 'react';

const Landing = () => {
  return (
    <div id="landing" className="container">
      <div className="showcase-content py-3">
        <h1 className="x-large">
          Start, raise and grow faster with ECell NSUT
        </h1>
        <p className="lead">the ultimate solution for your startup</p>
      </div>
      <div className="showcase-buttons">
        <button className="btn">Get Started</button>
        <a href="#contact" className="btn btn-light">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Landing;
