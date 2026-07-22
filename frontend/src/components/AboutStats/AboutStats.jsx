import React from 'react';

const AboutStats = () => {
  const stats = [
    {
      num: '150+',
      label: 'Trusted Clinics',
      icon: 'bi-building'
    },
    {
      num: '10K+',
      label: 'Happy Pet Owners',
      icon: 'bi-people'
    },
    {
      num: '5K+',
      label: 'Questions Answered',
      icon: 'bi-chat-text'
    },
    {
      num: '24/7',
      label: 'Support',
      icon: 'bi-patch-check'
    }
  ];

  return (
    <div className="container py-3">
      <div className="feature-panel-floating py-4">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-lg-3 col-sm-6 feature-col">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-circle mb-0 flex-shrink-0" style={{ backgroundColor: '#DCFCE7', color: '#15803D' }}>
                  <i className={`bi ${stat.icon}`} style={{ fontSize: '1.4rem' }}></i>
                </div>
                <div>
                  <h3 className="display-6 fw-bold mb-0 text-primary-green">{stat.num}</h3>
                  <p className="text-secondary small mb-0 fw-semibold">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
