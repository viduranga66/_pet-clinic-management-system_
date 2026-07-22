import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: '50+',
      label: 'Verified Clinics',
      desc: 'Partnered and checked clinics',
      icon: 'bi-building-check'
    },
    {
      number: '10,000+',
      label: 'Pet Owners',
      desc: 'Active satisfied pet owners',
      icon: 'bi-people'
    },
    {
      number: '25,000+',
      label: 'Questions Answered',
      desc: 'Queries addressed by vet doctors',
      icon: 'bi-patch-question'
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
      desc: 'Owner ratings on consultation advice',
      icon: 'bi-emoji-smile'
    }
  ];

  return (
    <section className="py-5 bg-light-green bg-opacity-25 rounded-24 mx-2 my-5">
      <div className="container py-4">
        <div className="row g-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-lg-3 col-sm-6">
              <div className="card-custom stat-card h-100 d-flex flex-column align-items-center justify-content-center">
                <span className="fs-1 text-primary-green mb-3">
                  <i className={`bi ${stat.icon}`}></i>
                </span>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label mb-1">{stat.label}</div>
                <p className="text-secondary small mb-0">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
