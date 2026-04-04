import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import GlowingCursor from './components/GlowingCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E5E7EB] font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <GlowingCursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
