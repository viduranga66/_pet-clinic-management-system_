import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="py-5 my-5">
      <div className="container">
        <div className="cta-container rounded-24 text-center">
          <div className="row justify-content-center py-4">
            <div className="col-lg-8">
              <span className="badge bg-light text-success fw-bold px-3 py-2 rounded-pill mb-3">🐾 Get In Touch</span>
              <h2 className="display-5 text-white fw-bold mb-3">Need Professional Advice For Your Pet?</h2>
              <p className="text-white-50 fs-5 mb-5">
                Our network of certified clinics is standing by to help. Start your consultation or register your clinic and join the community.
              </p>
              <div className="d-flex flex-sm-row flex-column gap-3 justify-content-center cta-buttons-container">
                <a href="#ask-question" className="btn-pill-cta-light text-decoration-none">
                  <i className="bi bi-chat-left-text"></i> Ask a Question
                </a>
                <a href="#register-clinic" className="btn-pill-cta-outline text-decoration-none">
                  <i className="bi bi-building"></i> Register Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
