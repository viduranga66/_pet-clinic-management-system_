import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import heroPets from '../assets/images/hero_pets.jpg';

const ClinicRegistrationPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    
    // Validation
    const clinicName = data.get('clinicName');
    const ownerName = data.get('ownerName');
    const licenseNumber = data.get('licenseNumber');
    const email = data.get('email');

    if (!clinicName || !ownerName || !licenseNumber || !email) {
      alert('Please fill out all required fields!');
      return;
    }

    const newReq = {
      id: Date.now(),
      clinicName,
      ownerName,
      email,
      phone: data.get('phone'),
      address: data.get('address'),
      city: data.get('city'),
      district: data.get('district'),
      licenseNumber,
      operatingHours: data.get('operatingHours'),
      servicesOffered: data.get('servicesOffered'),
      description: data.get('description'),
      password: data.get('password'),
      status: 'PENDING',
      createdDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    const saved = localStorage.getItem('pet_clinic_requests');
    const list = saved ? JSON.parse(saved) : [];
    list.push(newReq);
    localStorage.setItem('pet_clinic_requests', JSON.stringify(list));

    setSubmitted(true);
  };

  const marketingPoints = [
    {
      icon: 'bi-patch-check-fill',
      title: 'Verified Clinic Profile',
      desc: 'Get approved and connect with pet owners.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Reach More Pet Owners',
      desc: 'Answer questions and provide expert guidance.'
    },
    {
      icon: 'bi-grid-fill',
      title: 'Manage Your Clinic',
      desc: 'Build your online veterinary presence.'
    }
  ];

  return (
    <div className="clinic-registration-page bg-color">
      <Navbar />
      <section className="py-5" style={{ paddingTop: '120px', minHeight: '90vh' }}>
        <div className="container py-4 mt-5">
          <div className="row g-5 align-items-center">
            {/* LEFT COLUMN - MARKETING */}
            <div className="col-lg-4 text-start">
              <div className="badge-pill-custom mb-3">
                Join Our Veterinary Network
              </div>
              <h2 className="display-6 fw-bold text-dark mb-3">
                Register Your <br />
                <span className="text-primary-green">Pet Clinic</span>
              </h2>
              <p className="text-secondary mb-5 fs-6 lh-base">
                Connect with pet owners, provide professional veterinary advice, and grow your clinic through our trusted platform.
              </p>

              <div className="d-flex flex-column gap-4 mb-5">
                {marketingPoints.map((pt, idx) => (
                  <div key={idx} className="d-flex align-items-center gap-3">
                    <div className="icon-circle mb-0 flex-shrink-0" style={{ width: '45px', height: '45px', fontSize: '1.1rem' }}>
                      <i className={`bi ${pt.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="h6 fw-bold text-dark mb-0">{pt.title}</h4>
                      <p className="text-secondary small mb-0">{pt.desc}</p>
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

            {/* RIGHT COLUMN - CLINIC REGISTRATION FORM CARD */}
            <div className="col-lg-8">
              <div className="card-custom p-5">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 pb-3 border-bottom border-light">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="icon-circle mb-0 flex-shrink-0 bg-light-green text-primary-green" 
                      style={{ width: '55px', height: '55px', fontSize: '1.4rem' }}
                    >
                      <i className="bi bi-building"></i>
                    </div>
                    <div className="text-start">
                      <h2 className="h4 fw-bold text-dark mb-1">Pet Clinic Registration</h2>
                      <p className="text-secondary small mb-0">Submit your request to join our veterinary community.</p>
                    </div>
                  </div>
                  <Link to="/register" className="btn-pill-outline text-decoration-none py-2 px-4" style={{ fontSize: '0.85rem' }}>
                    <i className="bi bi-person"></i> Pet Owner Registration
                  </Link>
                </div>

                <div className="alert bg-light-green text-dark-green rounded-16 py-3 px-4 mb-4 text-start border-0 small fw-semibold">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  Your account will be activated after admin approval. (Status: PENDING)
                </div>

                {submitted ? (
                  <div className="py-5 text-center">
                    <div className="fs-1 text-primary-green mb-3">
                      <i className="bi bi-check2-circle"></i>
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-2">Request Submitted!</h3>
                    <p className="text-secondary fs-6 px-lg-5">
                      Your registration request has been submitted successfully. Please wait for admin approval.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-pill-outline mt-4">
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Clinic Name */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Clinic Name <span className="text-danger">*</span></label>
                        <input name="clinicName" type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter clinic name" required />
                        <i className="bi bi-building position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Owner Name */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Owner Name <span className="text-danger">*</span></label>
                        <input name="ownerName" type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter owner name" required />
                        <i className="bi bi-person position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Email Address */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Email Address <span className="text-danger">*</span></label>
                        <input name="email" type="email" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter email address" required />
                        <i className="bi bi-envelope position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Phone Number */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Phone Number <span className="text-danger">*</span></label>
                        <input name="phone" type="tel" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter phone number" required />
                        <i className="bi bi-telephone position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Clinic Address */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Clinic Address <span className="text-danger">*</span></label>
                        <input name="address" type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter clinic address" required />
                        <i className="bi bi-geo-alt position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* City */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">City <span className="text-danger">*</span></label>
                        <input name="city" type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter city" required />
                        <i className="bi bi-geo-alt position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* District */}
                      <div className="col-md-6 text-start">
                        <label className="form-label text-dark fw-semibold small">District <span className="text-danger">*</span></label>
                        <select name="district" className="form-select rounded-16 py-3 fs-6 text-secondary" style={{ border: '1px solid #dee2e6' }} required>
                          <option value="">Select district</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Kalutara">Kalutara</option>
                        </select>
                      </div>
                      {/* License Number */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">License Number <span className="text-danger">*</span></label>
                        <input name="licenseNumber" type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter clinic license number" required />
                        <i className="bi bi-card-text position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Operating Hours */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Operating Hours <span className="text-danger">*</span></label>
                        <input name="operatingHours" type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="e.g. Mon-Sat: 8AM-6PM" required />
                        <i className="bi bi-clock position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Services Offered */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Services Offered <span className="text-danger">*</span></label>
                        <input name="servicesOffered" type="text" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="e.g. Surgery, Dental, Vaccination" required />
                        <i className="bi bi-patch-check position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Clinic Description */}
                      <div className="col-12 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Clinic Description <span className="text-danger">*</span></label>
                        <textarea name="description" className="form-control rounded-16 py-3 pe-5 fs-6" rows="2" placeholder="Tell us about your clinic..." required></textarea>
                        <i className="bi bi-pencil position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Password */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Password <span className="text-danger">*</span></label>
                        <input name="password" type="password" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Enter password" required />
                        <i className="bi bi-lock position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                      {/* Confirm Password */}
                      <div className="col-md-6 text-start position-relative">
                        <label className="form-label text-dark fw-semibold small">Confirm Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control rounded-16 py-3 pe-5 fs-6" placeholder="Confirm password" required />
                        <i className="bi bi-lock position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                      </div>
                    </div>

                    <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center mt-4">
                      <i className="bi bi-send-check"></i> Submit Registration Request
                    </button>
                  </form>
                )}

                <div className="text-center mt-4 pt-2">
                  <span className="text-muted small">Already approved? </span>
                  <a href="#login" className="text-primary-green fw-semibold small text-decoration-none">Login to your clinic account</a>
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

export default ClinicRegistrationPage;
