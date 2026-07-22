import React from 'react';
import heroPets from '../../assets/images/hero_pets.jpg';

const ServicesHero = () => {
  return (
    <section className="hero-section bg-color">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-lg-5 text-start pe-lg-5">
            <div className="badge-pill-custom mb-4">
              <span>🐾</span> Our Services
            </div>
            <h1 className="hero-heading text-dark-green mb-2 position-relative d-inline-block">
              We Care for Your Pets
              <span className="d-block bg-primary-green mt-2" style={{ height: '3px', width: '80px', borderRadius: '2px' }}></span>
            </h1>
            <p className="lead text-secondary mb-4 mt-4 fs-5 fw-normal lh-base">
              We provide a wide range of veterinary services to keep your pets healthy, happy and safe.
            </p>
          </div>
          <div className="col-lg-7 position-relative mt-5 mt-lg-0 ps-lg-5">
            <div className="hero-image-arch-container">
              <img 
                src={heroPets} 
                alt="Retriever Dog and Tabby Cat" 
                className="hero-image-arch" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
