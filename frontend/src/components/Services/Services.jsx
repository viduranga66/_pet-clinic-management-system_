import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'bi-patch-plus',
      title: 'Vaccination',
      desc: 'Keep your pet immune against rabies, parvovirus, and common infections with up-to-date schedule tracking.'
    },
    {
      icon: 'bi-clipboard2-pulse',
      title: 'General Checkup',
      desc: 'Comprehensive physical exams, health monitoring, weight guidance, and age-based wellness programs.'
    },
    {
      icon: 'bi-scissors',
      title: 'Pet Surgery',
      desc: 'Modern surgical suite performing spay & neuter operations alongside complex soft tissue procedures.'
    },
    {
      icon: 'bi-activity',
      title: 'Dental Care',
      desc: 'Professional scaling, cleaning, tooth extraction, and oral health hygiene advice for fresh pet breath.'
    },
    {
      icon: 'bi-heart-pulse-fill',
      title: 'Emergency Care',
      desc: 'Immediate round-the-clock emergency medical response and critical pet monitoring.'
    },
    {
      icon: 'bi-funnel',
      title: 'Laboratory',
      desc: 'On-site diagnostics offering rapid blood tests, urinalysis, pathology checks, and digital imaging.'
    },
    {
      icon: 'bi-egg-fried',
      title: 'Pet Nutrition',
      desc: 'Dietary planning advice, weight management packages, and customized allergy-friendly meal plans.'
    },
    {
      icon: 'bi-palette',
      title: 'Pet Grooming',
      desc: 'Hygienic coat care, style grooming, deep bathing, nail clipping, and external ear cleansing.'
    }
  ];

  return (
    <section id="services" className="py-5 bg-light-green bg-opacity-25 rounded-24 mx-2 my-5">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge-pill-custom mb-3">🐾 Our Services</span>
          <h2 className="display-6 fw-bold text-dark-green mb-3">High Quality Care for Every Need</h2>
          <p className="text-secondary col-lg-7 mx-auto">
            Explore the diverse medical and veterinary services offered by our network of verified modern pet clinics.
          </p>
        </div>
        <div className="row g-4 mt-2">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card-custom service-card h-100 d-flex flex-column align-items-center text-center p-4">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">{service.title}</h3>
                <p className="text-secondary small mb-0 lh-base">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
