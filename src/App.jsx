import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sports from './components/Sports';
import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Sports />
      <Programs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
