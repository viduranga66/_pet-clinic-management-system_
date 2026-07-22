import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-top py-5 mt-5">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-md-4 text-start">
            <a className="footer-logo text-dark-green mb-3" href="#home">
              <span className="fs-3">🐾</span>
              <span className="fw-bold tracking-tight">Pet Clinic</span>
            </a>
            <p className="text-secondary small mb-0 lh-base">
              Providing modern digital infrastructure for veterinary clinics and pet owners. Connecting trusted medical care when you need it most.
            </p>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-wrap justify-content-md-end justify-content-start gap-4 my-2">
              <a href="#about" className="footer-link small font-weight-medium">About</a>
              <a href="#services" className="footer-link small font-weight-medium">Services</a>
              <a href="#contact" className="footer-link small font-weight-medium">Contact</a>
              <a href="#privacy" className="footer-link small font-weight-medium">Privacy Policy</a>
            </div>
          </div>
          <div className="col-md-3 text-md-end text-start">
            <div className="d-flex justify-content-md-end justify-content-start gap-2 mb-3">
              <a href="#facebook" className="social-icon-btn" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#linkedin" className="social-icon-btn" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 text-muted opacity-25" />
        <div className="row">
          <div className="col text-center">
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} Pet Clinic Management System. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
