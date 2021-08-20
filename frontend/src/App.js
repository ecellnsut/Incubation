import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Stats from './components/Stats';
import Services from './components/Services';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Stats />
      <Services />
    </Fragment>
  );
};

export default App;
