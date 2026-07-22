import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ServicesHero from '../components/ServicesHero/ServicesHero';
import ServicesGrid from '../components/ServicesGrid/ServicesGrid';
import ServicesCTA from '../components/ServicesCTA/ServicesCTA';
import Footer from '../components/Footer/Footer';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
