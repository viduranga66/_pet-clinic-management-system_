import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout/AdminLayout';

const defaultClinics = [
  {
    id: 1,
    clinicName: 'Healthy Pet Clinic',
    ownerName: 'Dr. Chamara Dias',
    email: 'hello@healthypet.lk',
    phone: '+94 11 987 6543',
    address: '10 High Level Rd, Maharagama',
    district: 'Colombo',
    licenseNumber: 'VET-2023-1120',
    status: 'APPROVED',
    createdDate: 'May 21, 2025'
  }
];

const AdminApprovedClinicsPage = () => {
  const [clinics, setClinics] = useState([]);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({ id: null, clinicName: '', ownerName: '', email: '', district: '', phone: '', address: '' });

  useEffect(() => {
    const saved = localStorage.getItem('pet_clinics');
    if (saved) {
      setClinics(JSON.parse(saved));
    } else {
      localStorage.setItem('pet_clinics', JSON.stringify(defaultClinics));
      setClinics(defaultClinics);
    }
  }, []);

  const handleOpenView = (clinic) => {
    setSelectedClinic(clinic);
    setShowViewModal(true);
  };

  const handleOpenEdit = (clinic) => {
    setEditForm({ ...clinic });
    setShowEditModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = clinics.map(c => c.id === editForm.id ? { ...c, ...editForm } : c);
    setClinics(updated);
    localStorage.setItem('pet_clinics', JSON.stringify(updated));
    setShowEditModal(false);
    alert('Clinic details updated successfully!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this clinic account?')) {
      const updated = clinics.filter(c => c.id !== id);
      setClinics(updated);
      localStorage.setItem('pet_clinics', JSON.stringify(updated));
      alert('Clinic account deleted successfully.');
    }
  };

  return (
    <AdminLayout>
      <div className="card-custom p-4 bg-white">
        <h3 className="h5 fw-bold text-dark mb-1">Approved Clinics</h3>
        <p className="text-muted small mb-4">Manage registered veterinary clinics on the system</p>

        <div className="table-responsive">
          <table className="table align-middle border-light">
            <thead>
              <tr className="text-secondary small fw-semibold border-bottom">
                <th className="py-3">#</th>
                <th className="py-3">Clinic Name</th>
                <th className="py-3">Owner</th>
                <th className="py-3">Email</th>
                <th className="py-3">District</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3">Registered Date</th>
                <th className="py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clinics.map((c, idx) => (
                <tr key={c.id} className="border-bottom border-light">
                  <td className="py-3 small text-muted">0{idx + 1}</td>
                  <td className="py-3 fw-bold text-dark">{c.clinicName}</td>
                  <td className="py-3 small">{c.ownerName}</td>
                  <td className="py-3 small text-secondary">{c.email}</td>
                  <td className="py-3 small text-secondary">{c.district}</td>
                  <td className="py-3 text-center">
                    <span className="badge bg-light-green text-dark-green rounded-pill px-3 py-2 small fw-semibold">
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 small text-secondary">{c.createdDate}</td>
                  <td className="py-3 text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      <button onClick={() => handleOpenView(c)} className="btn btn-outline-secondary rounded-pill-custom py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                        View Profile
                      </button>
                      <button onClick={() => handleOpenEdit(c)} className="btn-pill-primary py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(c.id)} className="btn btn-outline-danger rounded-pill-custom py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VIEW MODAL */}
      {showViewModal && selectedClinic && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowViewModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-building"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">{selectedClinic.clinicName}</h3>
                <span className="text-muted small">Registered Clinic Profile</span>
              </div>
            </div>

            <div className="row g-3 small text-secondary mb-4">
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Owner Name</span>
                <span>{selectedClinic.ownerName}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">License Number</span>
                <span>{selectedClinic.licenseNumber}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Email</span>
                <span>{selectedClinic.email}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Phone</span>
                <span>{selectedClinic.phone}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">District</span>
                <span>{selectedClinic.district}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Registered Date</span>
                <span>{selectedClinic.createdDate}</span>
              </div>
              <div className="col-12">
                <span className="fw-semibold text-dark d-block">Address</span>
                <span>{selectedClinic.address}</span>
              </div>
            </div>

            <button onClick={() => setShowViewModal(false)} className="btn-pill-primary py-3 px-5 mx-auto d-flex justify-content-center">
              Close
            </button>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {showEditModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowEditModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-pencil-square"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">Edit Clinic Settings</h3>
                <p className="text-secondary small mb-0">Modify registered details for {editForm.clinicName}</p>
              </div>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="row g-3 mb-4">
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Clinic Name</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 fs-6" 
                    value={editForm.clinicName}
                    onChange={(e) => setEditForm({ ...editForm, clinicName: e.target.value })}
                    required 
                  />
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Owner Name</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 fs-6" 
                    value={editForm.ownerName}
                    onChange={(e) => setEditForm({ ...editForm, ownerName: e.target.value })}
                    required 
                  />
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control rounded-16 py-3 fs-6" 
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    required 
                  />
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 fs-6" 
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    required 
                  />
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">District</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 fs-6" 
                    value={editForm.district}
                    onChange={(e) => setEditForm({ ...editForm, district: e.target.value })}
                    required 
                  />
                </div>
                <div className="col-12 text-start">
                  <label className="form-label text-dark fw-semibold small">Address</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 fs-6" 
                    value={editForm.address}
                    onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div className="d-flex gap-3">
                <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center">
                  Save Changes
                </button>
                <button type="button" onClick={() => setShowEditModal(false)} className="btn btn-outline-secondary rounded-pill-custom w-100 py-3 fw-semibold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminApprovedClinicsPage;
