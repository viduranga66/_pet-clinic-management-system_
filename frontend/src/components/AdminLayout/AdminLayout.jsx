import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import heroPets from '../../assets/images/hero_pets.jpg';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="admin-dashboard d-flex bg-color min-vh-100 position-relative">
      
      {/* SIDEBAR */}
      <aside className={`bg-dark-green d-flex flex-column justify-content-between p-3 transition-smooth ${sidebarOpen ? 'd-block' : 'd-none'}`} style={{ width: '280px', minHeight: '100vh', zIndex: 1000 }}>
        <div>
          {/* Logo / Branding */}
          <Link className="footer-logo text-white d-flex align-items-center mb-4 px-2" to="/">
            <span className="fs-3">🐾</span>
            <span className="fw-bold tracking-tight fs-5">Pet Clinic System</span>
          </Link>

          {/* Navigation Links */}
          <ul className="nav flex-column gap-2 mb-4 text-start">
            <li className="nav-item">
              <NavLink 
                to="/admin/dashboard"
                className={({ isActive }) => `nav-link w-100 rounded-16 py-3 px-4 border-0 text-start d-flex align-items-center gap-3 ${isActive ? 'bg-primary-green text-white fw-semibold' : 'text-white-50 bg-transparent'}`}
              >
                <i className="bi bi-grid-fill"></i> Dashboard
              </NavLink>
            </li>
            
            <li className="text-uppercase text-white-50 fs-7 fw-bold tracking-wider px-3 mt-4 mb-2">Manage</li>
            
            <li className="nav-item">
              <NavLink 
                to="/admin/clinic-requests"
                className={({ isActive }) => `nav-link w-100 rounded-16 py-3 px-4 border-0 text-start d-flex align-items-center gap-3 ${isActive ? 'bg-primary-green text-white fw-semibold' : 'text-white-50 bg-transparent'}`}
              >
                <i className="bi bi-file-earmark-medical"></i> Clinic Requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/admin/clinics"
                className={({ isActive }) => `nav-link w-100 rounded-16 py-3 px-4 border-0 text-start d-flex align-items-center gap-3 ${isActive ? 'bg-primary-green text-white fw-semibold' : 'text-white-50 bg-transparent'}`}
              >
                <i className="bi bi-building"></i> Approved Clinics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/admin/users"
                className={({ isActive }) => `nav-link w-100 rounded-16 py-3 px-4 border-0 text-start d-flex align-items-center gap-3 ${isActive ? 'bg-primary-green text-white fw-semibold' : 'text-white-50 bg-transparent'}`}
              >
                <i className="bi bi-people"></i> Pet Owners
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link w-100 text-white-50 bg-transparent py-2 px-3 rounded-12 d-flex align-items-center gap-3 text-start border-0" style={{ cursor: 'default' }}>
                <i className="bi bi-graph-up"></i> Reports
              </span>
            </li>

            <li className="text-uppercase text-white-50 fs-7 fw-bold tracking-wider px-3 mt-4 mb-2">Account</li>

            <li className="nav-item">
              <NavLink 
                to="/admin/profile"
                className={({ isActive }) => `nav-link w-100 rounded-16 py-3 px-4 border-0 text-start d-flex align-items-center gap-3 ${isActive ? 'bg-primary-green text-white fw-semibold' : 'text-white-50 bg-transparent'}`}
              >
                <i className="bi bi-person-circle"></i> Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="btn w-100 text-white-50 bg-transparent py-2 px-3 rounded-12 d-flex align-items-center gap-3 hover-bg text-start border-0">
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Bottom card graphic */}
        <div className="bg-light bg-opacity-10 rounded-24 p-3 text-center position-relative overflow-hidden mt-4">
          <img src={heroPets} alt="Pets" className="rounded-circle mb-3 mx-auto" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
          <h4 className="h6 fw-bold text-white mb-1">Care • Connect • Heal</h4>
          <p className="text-white-50 small mb-0" style={{ fontSize: '0.72rem' }}>Better care for healthier pets 💚</p>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="flex-grow-1 d-flex flex-column min-vh-100 overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="btn p-1 fs-4 border-0">
            <i className="bi bi-list"></i>
          </button>
          
          <div className="d-flex align-items-center gap-4">
            <button className="btn p-1 fs-5 border-0 text-secondary position-relative">
              <i className="bi bi-bell"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" style={{ fontSize: '0.55rem', padding: '3px 5px' }}>
                5
              </span>
            </button>
            <div className="d-flex align-items-center gap-3 border-start ps-4">
              <div className="text-end d-none d-sm-block">
                <h4 className="h6 fw-bold text-dark mb-0">Admin User</h4>
                <span className="text-muted small" style={{ fontSize: '0.75rem' }}>Administrator</span>
              </div>
              <img src={heroPets} alt="Admin Avatar" className="rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
              <i className="bi bi-chevron-down text-muted small"></i>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-4 flex-grow-1 text-start" style={{ overflowY: 'auto' }}>
          {children}
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
