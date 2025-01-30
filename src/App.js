import React from 'react';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Home from './components/MenuItems/Home';
import Blog from './components/MenuItems/Blog';
import Contact from './components/MenuItems/Contact';
import AboutUs from './components/MenuItems/AboutUs';
import WhatsAppButton from './components/ExtraFeatures/WhatsAppButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
            </div>
    </Router>
  );
}

export default App;
