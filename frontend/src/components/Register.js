import React from 'react';
import { useGlobalContext } from '../context';

const Register = () => {
  const { setFormVisible } = useGlobalContext();

  return (
    <div id="register" className="bg-dark">
      <div className="container">
        <h2>
          Start Your <span className="text-secondary">Journey With Us</span>
        </h2>
        <a href="#landing" className="btn" onClick={() => setFormVisible(true)}>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Register;
