import React from 'react';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Topbar from './components/Topbar/Topbar';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio /> 
      <Testimonials />  
      <Contact /> 
      <Footer /> 
    </>
  )
}

export default App
