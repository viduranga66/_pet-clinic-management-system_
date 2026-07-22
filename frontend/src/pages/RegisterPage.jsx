import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import heroPets from '../assets/images/hero_pets.jpg';

const RegisterPage = () => {
  const features = [
    {
      icon: 'bi-chat-left-text-fill',
      title: 'Ask Questions',
      desc: 'Get help from trusted clinics'
    },
    {
      icon: 'bi-card-checklist',
      title: 'Track Your Questions',
      desc: 'View answers and follow up easily'
    },
    {
      icon: 'bi-person-fill-check',
      title: 'Manage Your Profile',
      desc: 'Keep your information up to date'
    }
  ];

  return (
    <div className="register-page bg-color">
      <Navbar />
      <section className="py-5" style={{ paddingTop: '120px', minHeight: '90vh' }}>
        <div className="container py-4 mt-5">
          <div className="row g-5 align-items-center">
            {/* LEFT COLUMN */}
            <div className="col-lg-4 text-start">
              <h2 className="display-6 fw-bold text-dark mb-3">
                Join as a <br />
                <span className="text-primary-green">Pet Owner</span>
              </h2>
              <p className="text-secondary mb-5 fs-6 lh-base">
                Create your account to ask questions, get answers from clinics, and care better for your pets.
              </p>

              <div className="d-flex flex-column gap-4 mb-5">
                {features.map((feat, idx) => (
                  <div key={idx} className="d-flex align-items-center gap-3">
                    <div className="icon-circle mb-0 flex-shrink-0" style={{ width: '45px', height: '45px', fontSize: '1.1rem' }}>
                      <i className={`bi ${feat.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="h6 fw-bold text-dark mb-0">{feat.title}</h4>
                      <p className="text-secondary small mb-0">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="why-choose-us-image-container ms-0" style={{ width: '220px', height: '220px', borderRadius: '50%' }}>
                  <img src={heroPets} alt="Pets" className="why-choose-us-image w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - REGISTRATION CARD */}
            <div className="col-lg-8">
              <div className="card-custom p-5">
                {/* Card Header with Heading & Outlined Clinic Registration Button */}
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 pb-3 border-bottom border-light">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="icon-circle mb-0 flex-shrink-0 bg-light-green text-primary-green" 
                      style={{ width: '55px', height: '55px', fontSize: '1.4rem' }}
                    >
                      <i className="bi bi-person"></i>
                    </div>
                    <div className="text-start">
                      <h2 className="h4 fw-bold text-dark mb-1">Pet Owner Register</h2>
                      <p className="text-secondary small mb-0">Create your account to get started.</p>
                    </div>
                  </div>
                  <Link to="/clinic-registration" className="btn-pill-outline text-decoration-none py-2 px-4" style={{ fontSize: '0.85rem' }}>
                    <i className="bi bi-building"></i> Pet Clinic Registration
                  </Link>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    {/* First Name */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">First Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter first name" required />
                      <i className="bi bi-person position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* Last Name */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter last name" required />
                      <i className="bi bi-person position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* Email */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter email address" required />
                      <i className="bi bi-envelope position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* Phone Number */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">Phone Number <span className="text-danger">*</span></label>
                      <input type="tel" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter phone number" required />
                      <i className="bi bi-telephone position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* Password */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter password" required />
                      <i className="bi bi-lock position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* Confirm Password */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">Confirm Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Confirm password" required />
                      <i className="bi bi-lock position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* Address */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter your address" required />
                      <i className="bi bi-geo-alt position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* City */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">City <span className="text-danger">*</span></label>
                      <input type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter city" required />
                      <i className="bi bi-geo-alt position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                    </div>
                    {/* District */}
                    <div className="col-md-6 text-start">
                      <label className="form-label text-dark fw-semibold small">District <span className="text-danger">*</span></label>
                      <select className="form-select rounded-16 py-3 fs-6 text-secondary" style={{ border: '1px solid #dee2e6' }} required>
                        <option value="">Select district</option>
                        <option value="colombo">Colombo</option>
                        <option value="gampaha">Gampaha</option>
                        <option value="kalutara">Kalutara</option>
                        <option value="kandy">Kandy</option>
                      </select>
                    </div>
                    {/* Date of Birth */}
                    <div className="col-md-6 text-start position-relative">
                      <label className="form-label text-dark fw-semibold small">Date of Birth <span className="text-danger">*</span></label>
                      <input type="date" className="form-control rounded-16 py-3 pe-5 fs-6 text-secondary" required />
                    </div>
                    {/* I have pets */}
                    <div className="col-12 text-start mt-4">
                      <label className="form-label text-dark fw-semibold small d-block">I have pets <span className="text-danger">*</span></label>
                      <div className="d-flex gap-4">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="havePets" id="petsYes" defaultChecked />
                          <label className="form-check-label text-dark small" htmlFor="petsYes">Yes</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="havePets" id="petsNo" />
                          <label className="form-check-label text-dark small" htmlFor="petsNo">No</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center mt-4">
                    <i className="bi bi-person-plus"></i> Create Account
                  </button>
                </form>

                <div className="text-center mt-4 pt-2">
                  <span className="text-muted small">Already have an account? </span>
                  <a href="#login" className="text-primary-green fw-semibold small text-decoration-none">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RegisterPage;
