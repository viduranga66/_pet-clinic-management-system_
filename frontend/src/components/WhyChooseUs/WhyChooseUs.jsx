import React from 'react';
import vetDoctor from '../../assets/images/vet_doctor.jpg';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Verified Clinics Only',
      icon: 'bi-patch-check-fill',
      desc: 'Every registered veterinary clinic goes through strict license and credential checkups.'
    },
    {
      title: 'Professional Medical Advice',
      icon: 'bi-file-medical-fill',
      desc: 'Ask complex pet health questions and get clinical feedback from experienced practitioners.'
    },
    {
      title: 'Timely & Fast Responses',
      icon: 'bi-lightning-fill',
      desc: 'No more waiting for days. Connect with active doctors online for quick diagnostic ideas.'
    },
    {
      title: 'Trusted Pet Community',
      icon: 'bi-people-fill',
      desc: 'Share experiences and find ratings and reviews from fellow cat and dog owners.'
    },
    {
      title: 'Seamless Digital Registration',
      icon: 'bi-person-badge-fill',
      desc: 'Quickly set up clinic profiles, operational timings, pet record databases and manage vets.'
    }
  ];

  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="why-choose-us-image-container">
              <img 
                src={vetDoctor} 
                alt="Professional Veterinarian Doctor" 
                className="why-choose-us-image img-fluid" 
              />
            </div>
          </div>
          <div className="col-lg-6 text-start">
            <span className="badge-pill-custom mb-3">🐾 Why Choose Us</span>
            <h2 className="display-6 fw-bold text-dark-green mb-4">Dedicated to Pet Health Excellence</h2>
            <p className="text-secondary mb-4 col-lg-11">
              Our system guarantees high-standards of pet care, giving you peace of mind with qualified support systems and reliable medical advice.
            </p>
            <div className="d-flex flex-column gap-3 mt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="choose-item-card">
                  <span className="fs-4 text-primary-green">
                    <i className={`bi ${pt.icon}`}></i>
                  </span>
                  <div>
                    <h4 className="h6 fw-bold mb-1 text-dark">{pt.title}</h4>
                    <p className="text-secondary small mb-0">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
