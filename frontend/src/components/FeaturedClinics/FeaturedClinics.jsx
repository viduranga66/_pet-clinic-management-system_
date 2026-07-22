import React from 'react';
import vetDoctor from '../../assets/images/vet_doctor.jpg';

const FeaturedClinics = () => {
  const clinics = [
    {
      name: 'Oakridge Veterinary Hospital',
      location: '128 Medical Center Dr, Boston, MA',
      rating: '4.9',
      image: vetDoctor,
      desc: 'Providing advanced surgical procedures, comprehensive diagnostics, and personalized primary care services.'
    },
    {
      name: 'Green Valley Animal Clinic',
      location: '404 Pine Avenue, Seattle, WA',
      rating: '4.8',
      image: vetDoctor,
      desc: 'Dedicated to friendly preventative medical checkups, pet dental hygiene, and emergency outpatient care.'
    },
    {
      name: 'Lakeside Animal Hospital',
      location: '710 Lakeshore Road, Chicago, IL',
      rating: '4.9',
      image: vetDoctor,
      desc: 'Expert vet consultations, full nutrition guidance, pet vaccines, and complete laboratory diagnostic tests.'
    }
  ];

  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge-pill-custom mb-3">🏥 Clinic Network</span>
          <h2 className="display-6 fw-bold text-dark-green mb-3">Featured Veterinary Clinics</h2>
          <p className="text-secondary col-lg-7 mx-auto">
            Discover verified local veterinary hospitals with top ratings and complete pet care facilities.
          </p>
        </div>
        <div className="row g-4 mt-2">
          {clinics.map((clinic, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="clinic-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="clinic-img-wrapper">
                    <img src={clinic.image} alt={clinic.name} className="clinic-img" />
                    <span className="clinic-rating">
                      <i className="bi bi-star-fill text-warning"></i> {clinic.rating}
                    </span>
                  </div>
                  <div className="clinic-body">
                    <span className="clinic-location">
                      <i className="bi bi-geo-alt"></i> {clinic.location}
                    </span>
                    <h3 className="h5 fw-bold text-dark mb-2">{clinic.name}</h3>
                    <p className="text-secondary small mb-0 lh-base">{clinic.desc}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <button className="btn-pill-outline w-100 py-2 d-flex justify-content-center align-items-center">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClinics;
