import React from 'react';

const WhyTrustUs = () => {
  const points = [
    {
      title: 'Verified Clinics',
      icon: 'bi-building-check',
      desc: 'All veterinary clinics listed on our platform are thoroughly vetted and approved with active state licenses.'
    },
    {
      title: 'Professional Veterinarians',
      icon: 'bi-person-check',
      desc: 'Engage with certified animal doctors who possess extensive diagnostic, surgical, and therapeutic backgrounds.'
    },
    {
      title: 'Fast Responses',
      icon: 'bi-lightning-charge',
      desc: 'Obtain clinical replies to your pet health questions in a timely manner, easing stressful pet care decisions.'
    }
  ];

  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge-pill-custom mb-3">🛡️ Why Trust Us</span>
          <h2 className="display-6 fw-bold text-dark-green mb-3">Why Pet Owners Trust Us</h2>
          <p className="text-secondary col-lg-7 mx-auto">
            We are dedicated to providing the highest standards of safety, quality, and clinical expertise for your pet.
          </p>
        </div>
        <div className="row g-4 mt-2">
          {points.map((pt, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="trust-card h-100">
                <div className="trust-icon-circle">
                  <i className={`bi ${pt.icon}`}></i>
                </div>
                <h3 className="h4 fw-bold text-dark mb-3">{pt.title}</h3>
                <p className="text-secondary small mb-0 lh-base">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
