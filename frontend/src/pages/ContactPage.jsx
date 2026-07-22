import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ContactHero from '../components/ContactHero/ContactHero';
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <ContactHero />
      <Footer />
    </div>
  );
};

export default ContactPage;
