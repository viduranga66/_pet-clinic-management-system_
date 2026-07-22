import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="footer-logo navbar-brand text-dark-green d-flex align-items-center" to="/">
          <span className="fs-3">🐾</span>
          <span className="fw-bold tracking-tight">Pet Clinic</span>
        </Link>
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Link className="btn-pill-outline text-decoration-none" to="/login">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Link>
            <Link className="btn-pill-primary text-decoration-none" to="/register">
              <i className="bi bi-person-plus"></i> Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
