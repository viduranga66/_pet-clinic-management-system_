import React from 'react';

const FeatureBar = () => {
  const columns = [
    {
      icon: 'bi-question-circle',
      title: 'Ask Questions',
      desc: 'Get help from trusted clinics'
    },
    {
      icon: 'bi-shield-check',
      title: 'Trusted Clinics',
      desc: 'Verified & approved veterinary clinics'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Quick Answers',
      desc: 'Timely responses to your questions'
    },
    {
      icon: 'bi-patch-check',
      title: 'Pet Care Tips',
      desc: 'Useful information for pet health'
    }
  ];

  return (
    <div className="container">
      <div className="feature-panel-floating">
        <div className="row">
          {columns.map((col, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 feature-col">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-circle mb-0 flex-shrink-0">
                  <i className={`bi ${col.icon}`} style={{ fontSize: '1.4rem' }}></i>
                </div>
                <div>
                  <h3 className="feature-title-lg mb-1">{col.title}</h3>
                  <p className="text-secondary small mb-0 lh-sm">{col.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
