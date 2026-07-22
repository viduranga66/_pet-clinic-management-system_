import React from 'react';
import vetDoctor from '../../assets/images/vet_doctor.jpg';

const AboutHero = () => {
  const features = [
    {
      icon: 'bi-shield-check',
      title: 'Trusted Clinics',
      desc: 'All clinics are verified and approved'
    },
    {
      icon: 'bi-person-badge',
      title: 'Expert Support',
      desc: 'Get answers from veterinary experts'
    },
    {
      icon: 'bi-heart',
      title: 'Better Care',
      desc: 'Better information for better pet care'
    }
  ];

  return (
    <section className="hero-section bg-color">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-lg-5 text-start pe-lg-5">
            <div className="badge-pill-custom mb-4">
              <span>🐾</span> About Us
            </div>
            <h1 className="hero-heading text-dark-green mb-2 position-relative d-inline-block">
              About Us
              <span className="d-block bg-primary-green mt-2" style={{ height: '3px', width: '80px', borderRadius: '2px' }}></span>
            </h1>
            <p className="lead text-secondary mb-3 mt-4 fs-5 fw-normal lh-base">
              Our platform is designed to help pet owners connect with trusted veterinary clinics. We aim to provide the best experience for both pet owners and clinics.
            </p>
            <p className="text-secondary mb-5 fs-6 lh-lg">
              You can ask questions, get professional answers, and keep your pets healthy and happy.
            </p>
            <div className="row g-4 mt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="col-md-4 text-start">
                  <div className="d-flex flex-column align-items-start gap-2">
                    <div className="icon-circle mb-2" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                      <i className={`bi ${feat.icon}`}></i>
                    </div>
                    <h3 className="h6 fw-bold text-dark mb-1">{feat.title}</h3>
                    <p className="text-secondary small mb-0 lh-sm" style={{ fontSize: '0.75rem' }}>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7 position-relative mt-5 mt-lg-0 ps-lg-5">
            <div className="hero-image-arch-container">
              <img 
                src={vetDoctor} 
                alt="Veterinarian with Retriever Dog" 
                className="hero-image-arch" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
