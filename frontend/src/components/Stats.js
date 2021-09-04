import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div id="stats">
      <div className="stats-bg"></div>
      <div className="stats-cards">
        <div className="stats-card">
          <i className="fas fa-tasks fa-3x"></i>
          <h2>500+</h2>
          <p className="lead">lorem ipsum</p>
        </div>
        <div className="stats-card">
          <i className="fas fa-file-alt fa-3x"></i>
          <h2>#10</h2>
          <p className="lead">lorem ipsum</p>
        </div>
        <div className="stats-card">
          <i className="fas fa-shopping-bag fa-3x"></i>
          <h2>$500k</h2>
          <p className="lead">lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
