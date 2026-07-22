import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      num: '1',
      icon: 'bi-person-plus',
      title: 'Create Account',
      desc: 'Sign up in seconds as a pet owner or register your veterinary clinic with simple credentials.'
    },
    {
      num: '2',
      icon: 'bi-question-circle',
      title: 'Ask a Question',
      desc: 'Post details about your pet symptoms, habits, or general care and select tags to notify relevant vets.'
    },
    {
      num: '3',
      icon: 'bi-check-circle',
      title: 'Receive Answers',
      desc: 'Get verified expert veterinary feedback, consult direct answers, and find local trusted clinics.'
    }
  ];

  return (
    <section id="about" className="py-5 my-5">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge-pill-custom mb-3">🐾 How It Works</span>
          <h2 className="display-6 fw-bold text-dark-green mb-3">Simple Steps to Caring for Your Pet</h2>
          <p className="text-secondary col-lg-7 mx-auto">
            Get access to verified clinics and professional advice in just three quick steps. We make vet support seamless.
          </p>
        </div>
        <div className="row g-4 justify-content-center mt-3">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card-custom step-card h-100 p-5">
                <span className="step-number">{step.num}</span>
                <div className="icon-circle mx-auto mt-2">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h3 className="h4 fw-bold text-dark mb-3">{step.title}</h3>
                <p className="text-secondary small mb-0 lh-base">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
