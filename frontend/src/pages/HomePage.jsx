import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import FeatureBar from '../components/FeatureBar/FeatureBar';
import FeaturedClinics from '../components/FeaturedClinics/FeaturedClinics';
import CommunityQuestions from '../components/CommunityQuestions/CommunityQuestions';
import WhyTrustUs from '../components/WhyTrustUs/WhyTrustUs';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <FeatureBar />
      <FeaturedClinics />
      <CommunityQuestions />
      <WhyTrustUs />
      <Footer />
    </div>
  );
};

export default HomePage;
