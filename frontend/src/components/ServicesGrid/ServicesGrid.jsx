import React from 'react';

const ServicesGrid = () => {
  const services = [
    {
      icon: 'bi-heart-pulse',
      title: 'General Checkups',
      desc: 'Routine health exams to keep your pet in top shape.'
    },
    {
      icon: 'bi-thermometer-half',
      title: 'Vaccinations',
      desc: 'Protect your pets with essential vaccines and boosters.'
    },
    {
      icon: 'bi-scissors',
      title: 'Pet Surgery',
      desc: 'Safe and advanced surgical procedures for pets.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Dental Care',
      desc: 'Teeth cleaning and oral care for better health.'
    },
    {
      icon: 'bi-activity',
      title: 'Emergency Care',
      desc: '24/7 emergency care for your pet\'s urgent needs.'
    },
    {
      icon: 'bi-flask',
      title: 'Lab Tests',
      desc: 'Accurate diagnostic tests for proper treatment.'
    },
    {
      icon: 'bi-prescription2',
      title: 'Pharmacy',
      desc: 'Quality medicines and supplements for your pets.'
    },
    {
      icon: 'bi-stars',
      title: 'Grooming',
      desc: 'Bathing, grooming and styling for a happier pet.'
    }
  ];

  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge-pill-custom mb-3">
            🐾 Our Services 🐾
          </span>
          <p className="text-secondary small fw-semibold text-uppercase tracking-wider">
            Professional care for your furry family members
          </p>
        </div>
        <div className="row g-4">
          {services.map((srv, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="card-custom service-card h-100 d-flex flex-column align-items-center text-center p-4">
                <div className="icon-circle mb-3">
                  <i className={`bi ${srv.icon}`} style={{ fontSize: '1.6rem' }}></i>
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">{srv.title}</h3>
                <p className="text-secondary small mb-0 lh-base">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
