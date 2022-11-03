import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (

   <>
  <Navigation />
  <Header />
  <About />
  <Skills />
  <Project />
  <Contact />
  <Footer />
   </>

  );
}

export default App;
