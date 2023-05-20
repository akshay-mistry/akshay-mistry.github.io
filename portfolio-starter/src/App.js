import React from 'react';
// components
import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Nav />
      <div className='page-container'>
      <div className='section'>
        <Home />
      </div>
      <div className='section'>
        <Skills />
      </div>
      <div className='section'>
        <Experience />
      </div>
      <div className='section'>
        <Projects />
      </div>
      <div className='section'>
        <Awards />
      </div>
      <div className='section'>
        <Resume />
      </div>
      <div className='section'>
        <Contact />
      </div>
      </div>
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;