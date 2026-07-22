import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout/AdminLayout';

const AdminProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@petclinic.com',
    phone: '+94 11 234 5678',
    role: 'Administrator'
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleUpdate = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setEditMode(false);
    alert('Admin profile settings updated successfully!');
  };

  return (
    <AdminLayout>
      <div className="card-custom p-5 bg-white text-start" style={{ maxWidth: '800px' }}>
        <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-light">
          <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '55px', height: '55px', fontSize: '1.4rem' }}>
            <i className="bi bi-person-badge"></i>
          </div>
          <div>
            <h2 className="h4 fw-bold text-dark mb-1">Admin Profile</h2>
            <p className="text-secondary small mb-0">View and manage administrator account profile credentials.</p>
          </div>
        </div>

        {!editMode ? (
          <div className="row g-4 mb-4 text-secondary small">
            <div className="col-sm-6">
              <span className="fw-semibold text-dark d-block">Admin Name</span>
              <span className="fs-6 text-dark fw-medium">{profile.name}</span>
            </div>
            <div className="col-sm-6">
              <span className="fw-semibold text-dark d-block">System Role</span>
              <span className="fs-6 text-dark fw-medium">{profile.role}</span>
            </div>
            <div className="col-sm-6">
              <span className="fw-semibold text-dark d-block">Email Address</span>
              <span className="fs-6 text-dark fw-medium">{profile.email}</span>
            </div>
            <div className="col-sm-6">
              <span className="fw-semibold text-dark d-block">Phone Number</span>
              <span className="fs-6 text-dark fw-medium">{profile.phone}</span>
            </div>

            <div className="col-12 mt-4 pt-2">
              <button onClick={() => setEditMode(true)} className="btn-pill-primary py-3 px-5 border-0 text-white">
                Edit Profile Settings
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleUpdate}>
            <div className="row g-3">
              <div className="col-md-6 position-relative">
                <label className="form-label text-dark fw-semibold small">Admin Name</label>
                <input 
                  type="text" 
                  className="form-control rounded-16 py-3 pe-5 fs-6" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
                <i className="bi bi-person position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
              </div>
              <div className="col-md-6 position-relative">
                <label className="form-label text-dark fw-semibold small">Phone Number</label>
                <input 
                  type="tel" 
                  className="form-control rounded-16 py-3 pe-5 fs-6" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required 
                />
                <i className="bi bi-telephone position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
              </div>
              <div className="col-md-12 position-relative">
                <label className="form-label text-dark fw-semibold small">Email Address</label>
                <input 
                  type="email" 
                  className="form-control rounded-16 py-3 pe-5 fs-6" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
                <i className="bi bi-envelope position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1.1rem' }}></i>
              </div>
            </div>

            <div className="d-flex gap-3 mt-4 pt-2">
              <button type="submit" className="btn-pill-primary py-3 px-5 border-0 text-white">
                Save Profile Changes
              </button>
              <button type="button" onClick={() => setEditMode(false)} className="btn btn-outline-secondary rounded-pill-custom py-3 px-4 fw-semibold">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminProfilePage;
