import React from 'react';
// components
import Nav from './components/Nav';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800'>
      <Nav />
      
      <main>
        <section id='home' className='section-modern'>
          <Home />
        </section>
        
        <section id='experience' className='section-modern'>
          <Experience />
        </section>
        
        <section id='projects' className='section-modern'>
          <Projects />
        </section>
        
        <section id='contact' className='section-modern'>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
