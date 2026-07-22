import React from 'react';
import heroPets from '../../assets/images/hero_pets.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section bg-color">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-lg-5 text-start pe-lg-5">
            <div className="badge-pill-custom mb-4">
              <span>🐾</span> Trusted Care For Your Pets
            </div>
            <h1 className="hero-heading text-dark-green mb-3">
              Because They Deserve the <span className="text-primary-green">Best Care</span>
            </h1>
            <p className="lead text-secondary mb-4 fs-5 fw-normal lh-base">
              A platform that connects pet owners with trusted veterinary clinics. Ask questions, get answers, and keep your pets healthy.
            </p>
            <div className="d-flex flex-sm-row flex-column gap-3 cta-buttons-container mb-4">
              <a href="#ask-question" className="btn-pill-primary text-decoration-none">
                <i className="bi bi-chat-left-text"></i> Ask a Question
              </a>
              <a href="#register-clinic" className="btn-pill-outline text-decoration-none">
                <i className="bi bi-building"></i> Pet Clinic Registration
              </a>
            </div>
          </div>
          <div className="col-lg-7 position-relative mt-5 mt-lg-0 ps-lg-5">
            <div className="hero-image-arch-container">
              <img 
                src={heroPets} 
                alt="Golden Retriever and Cute Cat" 
                className="hero-image-arch" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
