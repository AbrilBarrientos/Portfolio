import React from 'react';
import Layout from './components/Layout';

import Home from './sections/Home';
import Projects from './sections/Projects';
import Education from './sections/Education';
import About from './sections/About';
import Skills from './sections/Skills';




function App() {
  return (
    
    <Layout>
      
      <Home />
      <Projects />

      <Education />
      <Skills />
      <About />
    </Layout>
  );
}

export default App;