import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import heroPets from '../assets/images/hero_pets.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin'); // admin | clinic | owner
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const usernameInput = data.get('username');

    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else if (role === 'clinic') {
      const savedClinics = localStorage.getItem('pet_clinics');
      const clinicsList = savedClinics ? JSON.parse(savedClinics) : [];
      
      // Look for approved clinic matching email
      const matchedClinic = clinicsList.find(c => c.email === usernameInput && c.status === 'APPROVED');
      if (matchedClinic) {
        navigate('/clinic/dashboard');
      } else {
        alert('Invalid clinic email, or registration is still PENDING admin approval!');
      }
    } else {
      navigate('/owner/dashboard');
    }
  };

  const welcomeFeatures = [
    {
      icon: 'bi-shield-lock-fill',
      title: 'Secure Login',
      desc: 'Your information is safe with us.'
    },
    {
      icon: 'bi-chat-quote-fill',
      title: 'Ask & Get Answers',
      desc: 'Connect with clinics and get professional answers.'
    },
    {
      icon: 'bi-people-fill',
      title: 'For Everyone',
      desc: 'Separate login for Admin, Clinics and Pet Owners.'
    }
  ];

  // Dynamic field parameters based on active role
  const getFieldConfig = () => {
    switch (role) {
      case 'admin':
        return {
          label: 'Email or Username',
          placeholder: 'Enter admin email or username'
        };
      case 'clinic':
        return {
          label: 'Clinic Email',
          placeholder: 'Enter clinic email'
        };
      case 'owner':
      default:
        return {
          label: 'Email',
          placeholder: 'Enter your email'
        };
    }
  };

  const fieldConfig = getFieldConfig();

  return (
    <div className="login-page bg-color">
      <Navbar />
      <section className="py-5" style={{ paddingTop: '120px', minHeight: '90vh' }}>
        <div className="container py-4 mt-5">
          <div className="row g-5 align-items-center">
            {/* LEFT COLUMN - WELCOME & DECORATIONS */}
            <div className="col-lg-5 text-start">
              <h1 className="hero-heading text-dark mb-2">
                Welcome Back! <br />
                <span className="text-primary-green">Login to Your Account</span>
              </h1>
              <span className="d-block bg-primary-green mt-2 mb-4" style={{ height: '3px', width: '80px', borderRadius: '2px' }}></span>
              
              <p className="text-secondary mb-5 fs-6 lh-base col-lg-11">
                Access your account to ask questions, get answers, and manage your pets with ease.
              </p>

              <div className="d-flex flex-column gap-4 mb-5">
                {welcomeFeatures.map((feat, idx) => (
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

              <div className="text-center mt-4">
                <div className="why-choose-us-image-container ms-0" style={{ width: '220px', height: '220px', borderRadius: '50%' }}>
                  <img src={heroPets} alt="Pets" className="why-choose-us-image w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - ROLE BASED LOGIN CARD */}
            <div className="col-lg-7">
              <div className="card-custom p-5">
                {/* Lock Circle and Header */}
                <div className="text-center mb-4">
                  <div 
                    className="icon-circle mx-auto bg-light-green text-primary-green" 
                    style={{ width: '65px', height: '65px', fontSize: '1.6rem' }}
                  >
                    <i className="bi bi-lock-fill"></i>
                  </div>
                  <h2 className="h4 fw-bold text-dark mt-3 mb-1">Login</h2>
                  <p className="text-secondary small">Please enter your credentials to login</p>
                </div>

                {/* Role Switcher */}
                <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                  <button 
                    onClick={() => setRole('admin')}
                    className={`btn-pill-${role === 'admin' ? 'primary' : 'outline'} py-2 px-4 d-flex align-items-center gap-2`}
                    style={{ fontSize: '0.85rem' }}
                  >
                    <i className="bi bi-shield-lock"></i> Admin
                  </button>
                  <button 
                    onClick={() => setRole('clinic')}
                    className={`btn-pill-${role === 'clinic' ? 'primary' : 'outline'} py-2 px-4 d-flex align-items-center gap-2`}
                    style={{ fontSize: '0.85rem' }}
                  >
                    <i className="bi bi-building"></i> Clinic
                  </button>
                  <button 
                    onClick={() => setRole('owner')}
                    className={`btn-pill-${role === 'owner' ? 'primary' : 'outline'} py-2 px-4 d-flex align-items-center gap-2`}
                    style={{ fontSize: '0.85rem' }}
                  >
                    <i className="bi bi-person"></i> Pet Owner
                  </button>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin}>
                  {/* Dynamic Email / Username Input */}
                  <div className="position-relative mb-3 text-start">
                    <label className="form-label text-dark fw-semibold small">{fieldConfig.label}</label>
                    <input 
                      name="username"
                      type={role === 'admin' ? 'text' : 'email'} 
                      className="form-control rounded-16 py-3 pe-5 fs-6" 
                      placeholder={fieldConfig.placeholder} 
                      required 
                    />
                    <i className="bi bi-envelope position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
                  </div>

                  {/* Password Input with Toggle */}
                  <div className="position-relative mb-3 text-start">
                    <label className="form-label text-dark fw-semibold small">Password</label>
                    <input 
                      name="password"
                      type={showPassword ? 'text' : 'password'} 
                      className="form-control rounded-16 py-3 pe-5 fs-6" 
                      placeholder="Enter your password" 
                      required 
                    />
                    <i className="bi bi-lock position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn border-0 p-0 position-absolute" 
                      style={{ right: '50px', top: '48px', zIndex: 10 }}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} text-muted`} style={{ fontSize: '1.1rem' }}></i>
                    </button>
                  </div>

                  {/* Checkbox and Forgot Link */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label text-dark small" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#forgot" className="text-primary-green fw-semibold small text-decoration-none">Forgot Password?</a>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center mb-3">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </button>
                </form>

                {/* Switch to Registration */}
                <div className="text-center mt-3 mb-4">
                  <span className="text-muted small">Don't have an account? </span>
                  <Link to="/register" className="text-primary-green fw-semibold small text-decoration-none">Register here</Link>
                </div>

                {/* Terms and Conditions card footer */}
                <div className="alert bg-light rounded-16 py-3 px-4 mb-0 text-start border-0 small d-flex align-items-center gap-3">
                  <i className="bi bi-check-circle-fill text-primary-green fs-5 flex-shrink-0"></i>
                  <span className="text-secondary small">
                    By logging in, you agree to our <a href="#terms" className="text-primary-green text-decoration-none fw-semibold">Terms & Conditions</a> and <a href="#privacy" className="text-primary-green text-decoration-none fw-semibold">Privacy Policy</a>.
                  </span>
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

export default LoginPage;
