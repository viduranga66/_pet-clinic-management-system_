import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: 'bi-chat-heart-fill',
      title: 'Ask Questions',
      desc: 'Get professional answers from trusted veterinary clinics.',
      color: '#15803D'
    },
    {
      icon: 'bi-shield-check',
      title: 'Verified Clinics',
      desc: 'Only approved veterinary clinics can answer your questions.',
      color: '#166534'
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Quick Responses',
      desc: 'Receive timely advice and response from professionals.',
      color: '#22c55e'
    },
    {
      icon: 'bi-heart-fill',
      title: 'Pet Care Tips',
      desc: 'Helpful health tips and resources for your lovely pets.',
      color: '#ef4444'
    }
  ];

  return (
    <section className="floating-features-container py-3">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map((feat, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div className="card-custom h-100 d-flex flex-column align-items-start text-start">
                <div className="icon-circle">
                  <i className={`bi ${feat.icon}`} style={{ fontSize: '1.4rem' }}></i>
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">{feat.title}</h3>
                <p className="text-secondary small mb-0 lh-base">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
