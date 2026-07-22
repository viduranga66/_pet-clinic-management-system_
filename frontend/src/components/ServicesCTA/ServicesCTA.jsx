import React from 'react';

const ServicesCTA = () => {
  return (
    <div className="container py-4 my-4">
      <div className="bg-light-green bg-opacity-75 rounded-24 p-5">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-lg-7 text-start">
            <div className="d-flex align-items-center gap-4 flex-sm-row flex-column text-sm-start text-center">
              <div 
                className="icon-circle mb-0 flex-shrink-0 bg-white text-primary-green" 
                style={{ width: '70px', height: '70px', fontSize: '2rem', boxShadow: 'var(--shadow-sm)' }}
              >
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h2 className="h3 fw-bold text-dark mb-1">Need Help or Have Questions?</h2>
                <p className="text-secondary mb-0">Our team is here to help you and your pets.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-lg-end text-center">
            <div className="d-flex flex-sm-row flex-column gap-3 justify-content-lg-end justify-content-center">
              <a href="#contact" className="btn-pill-outline bg-white border-white text-dark-green text-decoration-none">
                <i className="bi bi-chat-left-text"></i> Contact Us
              </a>
              <a href="#appointment" className="btn-pill-primary text-decoration-none">
                <i className="bi bi-calendar-event"></i> Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCTA;
