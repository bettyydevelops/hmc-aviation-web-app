import React from 'react';
import HeroSection from '../../components/HeroSection';
import Services from '../../components/Services';
import MissionVision from '../../components/MissionVision';
import Clients from '../../components/Clients';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import BackgroundAnimation from "../BackgroundAnimation";
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => (
      <div className="Home">
              <HeroSection />
              <MissionVision />
              <Services />
              <Clients />
              <Footer />
      </div>
);

export default Home;
