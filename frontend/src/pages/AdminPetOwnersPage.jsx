import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout/AdminLayout';

const defaultOwners = [
  { id: 1, name: 'Anjali Silva', email: 'anjali@example.com', phone: '+94 77 123 4567', registeredDate: 'May 20, 2025', status: 'Active', petsCount: 2 },
  { id: 2, name: 'Ruwan Perera', email: 'ruwan@example.com', phone: '+94 71 888 9999', registeredDate: 'May 21, 2025', status: 'Active', petsCount: 1 }
];

const AdminPetOwnersPage = () => {
  const [owners, setOwners] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({ id: null, name: '', email: '', phone: '', registeredDate: '', status: 'Active', petsCount: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('pet_owner_users');
    if (saved) {
      setOwners(JSON.parse(saved));
    } else {
      localStorage.setItem('pet_owner_users', JSON.stringify(defaultOwners));
      setOwners(defaultOwners);
    }
  }, []);

  const handleOpenView = (owner) => {
    setSelectedOwner(owner);
    setShowViewModal(true);
  };

  const handleOpenEdit = (owner) => {
    setEditForm({ ...owner });
    setShowEditModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = owners.map(o => o.id === editForm.id ? { ...o, ...editForm } : o);
    setOwners(updated);
    localStorage.setItem('pet_owner_users', JSON.stringify(updated));
    setShowEditModal(false);
    alert('Pet Owner details updated successfully!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this pet owner account?')) {
      const updated = owners.filter(o => o.id !== id);
      setOwners(updated);
      localStorage.setItem('pet_owner_users', JSON.stringify(updated));
      alert('Pet Owner account deleted successfully.');
    }
  };

  return (
    <AdminLayout>
      <div className="card-custom p-4 bg-white">
        <h3 className="h5 fw-bold text-dark mb-1">Pet Owners</h3>
        <p className="text-muted small mb-4">View and manage pet owners registered on the platform</p>

        <div className="table-responsive">
          <table className="table align-middle border-light">
            <thead>
              <tr className="text-secondary small fw-semibold border-bottom">
                <th className="py-3">#</th>
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Phone</th>
                <th className="py-3">Registered Date</th>
                <th className="py-3 text-center">Number of Pets</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {owners.map((o, idx) => (
                <tr key={o.id} className="border-bottom border-light">
                  <td className="py-3 small text-muted">0{idx + 1}</td>
                  <td className="py-3 fw-bold text-dark">{o.name}</td>
                  <td className="py-3 small text-secondary">{o.email}</td>
                  <td className="py-3 small text-secondary">{o.phone}</td>
                  <td className="py-3 small text-secondary">{o.registeredDate}</td>
                  <td className="py-3 text-center small fw-semibold text-dark">{o.petsCount}</td>
                  <td className="py-3 text-center">
                    <span className={`badge rounded-pill px-3 py-2 small fw-semibold ${o.status === 'Active' ? 'bg-light-green text-dark-green' : 'bg-warning bg-opacity-15 text-warning'}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      <button onClick={() => handleOpenView(o)} className="btn btn-outline-secondary rounded-pill-custom py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                        View
                      </button>
                      <button onClick={() => handleOpenEdit(o)} className="btn-pill-primary py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(o.id)} className="btn btn-outline-danger rounded-pill-custom py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
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
      {showViewModal && selectedOwner && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowViewModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-person-fill"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">{selectedOwner.name}</h3>
                <span className="text-muted small">Registered Pet Owner Details</span>
              </div>
            </div>

            <div className="row g-3 small text-secondary mb-4">
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Email Address</span>
                <span>{selectedOwner.email}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Phone Number</span>
                <span>{selectedOwner.phone}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Registered Date</span>
                <span>{selectedOwner.registeredDate}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Registered Pets</span>
                <span>{selectedOwner.petsCount} pets registered</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Account Status</span>
                <span className="badge bg-light-green text-dark-green rounded-pill px-3 py-2 small fw-semibold d-inline-block">{selectedOwner.status}</span>
              </div>
            </div>

            <button onClick={() => setShowViewModal(false)} className="btn-pill-primary py-3 px-5 mx-auto d-flex justify-content-center">
              Close View
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
                <h3 className="h5 fw-bold text-dark mb-0">Edit Pet Owner Details</h3>
                <p className="text-secondary small mb-0">Modify registered details for {editForm.name}</p>
              </div>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="row g-3 mb-4">
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 fs-6" 
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
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
                  <label className="form-label text-dark fw-semibold small">Status</label>
                  <select 
                    className="form-select rounded-16 py-3 fs-6 text-secondary"
                    style={{ border: '1px solid #dee2e6' }}
                    value={editForm.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
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

export default AdminPetOwnersPage;
