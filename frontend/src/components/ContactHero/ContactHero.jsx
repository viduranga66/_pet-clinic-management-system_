import React from 'react';
import heroPets from '../../assets/images/hero_pets.jpg';

const ContactHero = () => {
  const infoItems = [
    {
      icon: 'bi-envelope',
      title: 'Email',
      value: 'support@petclinic.com'
    },
    {
      icon: 'bi-telephone',
      title: 'Phone',
      value: '+94 77 123 4567'
    },
    {
      icon: 'bi-geo-alt',
      title: 'Address',
      value: 'No. 125, Pet Care Street, Colombo 05, Sri Lanka'
    },
    {
      icon: 'bi-clock',
      title: 'Working Hours',
      value: 'Mon - Sat : 8.00 AM - 6.00 PM | Sunday : Closed'
    }
  ];

  return (
    <section className="hero-section bg-color position-relative py-5">
      {/* Decorative Background Graphics */}
      <div className="position-absolute opacity-10" style={{ top: '15%', left: '42%', fontSize: '4rem', pointerEvents: 'none' }}>🐾</div>
      <div className="position-absolute opacity-10" style={{ top: '25%', left: '46%', fontSize: '3rem', pointerEvents: 'none' }}>🤍</div>

      <div className="container py-4">
        <div className="row g-5 align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-lg-6 text-start">
            <div className="badge-pill-custom mb-4">
              <span>📞</span> We are here to help!
            </div>
            <h1 className="hero-heading text-dark-green mb-2 position-relative d-inline-block">
              Contact Us
              <span className="d-block bg-primary-green mt-2" style={{ height: '3px', width: '80px', borderRadius: '2px' }}></span>
            </h1>
            <p className="lead text-secondary mb-5 mt-4 fs-5 fw-normal lh-base">
              Have a question or need help? Feel free to get in touch with us. We're here to support you and your pets.
            </p>

            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="why-choose-us-image-container" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                  <img src={heroPets} alt="Golden Retriever and Cat" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column gap-4">
                  {infoItems.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-3">
                      <div className="icon-circle mb-0 flex-shrink-0" style={{ width: '45px', height: '45px', fontSize: '1.1rem' }}>
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-dark mb-1">{item.title}</h4>
                        <p className="text-secondary small mb-0 lh-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM CARD */}
          <div className="col-lg-6">
            <div className="card-custom p-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div 
                  className="icon-circle mb-0 flex-shrink-0 bg-light-green text-primary-green" 
                  style={{ width: '55px', height: '55px', fontSize: '1.4rem' }}
                >
                  <i className="bi bi-telegram"></i>
                </div>
                <div className="text-start">
                  <h2 className="h4 fw-bold text-dark mb-1">Send us a Message</h2>
                  <p className="text-secondary small mb-0">We will get back to you as soon as possible.</p>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="position-relative mb-3 text-start">
                  <label className="form-label text-dark fw-semibold small">Your Name</label>
                  <input type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter your name" />
                  <i className="bi bi-person position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
                </div>

                <div className="position-relative mb-3 text-start">
                  <label className="form-label text-dark fw-semibold small">Your Email</label>
                  <input type="email" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter your email" />
                  <i className="bi bi-envelope position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
                </div>

                <div className="position-relative mb-3 text-start">
                  <label className="form-label text-dark fw-semibold small">Subject</label>
                  <input type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter subject" />
                  <i className="bi bi-tag position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
                </div>

                <div className="position-relative mb-4 text-start">
                  <label className="form-label text-dark fw-semibold small">Message</label>
                  <textarea className="form-control rounded-16 py-3 pe-5 fs-6" rows="4" placeholder="Type your message here..."></textarea>
                  <i className="bi bi-pencil position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
                </div>

                <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center">
                  <i className="bi bi-send"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
