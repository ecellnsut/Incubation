import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Stats from './components/Stats';
import Services from './components/Services';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Stats />
      <Services />
      <Register />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
