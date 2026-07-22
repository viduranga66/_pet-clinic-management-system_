import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutHero from '../components/AboutHero/AboutHero';
import AboutStats from '../components/AboutStats/AboutStats';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      <AboutHero />
      <AboutStats />
      <div style={{ height: '80px' }}></div> {/* Add bottom margin spacing before footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
