import React from 'react';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Services from './components/Services';
import MissionVision from './components/MissionVision';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './components/MenuItems/Blog';
import Contact from './components/MenuItems/Contact';
import AboutUs from './components/MenuItems/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MissionVision />
              <Services />
              <Clients />
              <Footer />
            </>
          }
        />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
