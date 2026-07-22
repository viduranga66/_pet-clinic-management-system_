import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout/DashboardLayout';

const OwnerPetsPage = () => {
  const [pets, setPets] = useState([
    { name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', gender: 'Male', dob: '2023-04-12', notes: 'Allergies to chicken food.' },
    { name: 'Kitty', type: 'Cat', breed: 'Persian Cat', gender: 'Female', dob: '2024-06-01', notes: 'Fully vaccinated.' }
  ]);

  const [showPetModal, setShowPetModal] = useState(false);
  const [newPet, setNewPet] = useState({ name: '', type: 'Dog', breed: '', gender: 'Male', dob: '', notes: '' });

  const handleAddPet = (e) => {
    e.preventDefault();
    setPets([...pets, newPet]);
    setShowPetModal(false);
    setNewPet({ name: '', type: 'Dog', breed: '', gender: 'Male', dob: '', notes: '' });
  };

  return (
    <DashboardLayout>
      <div className="card-custom p-4 bg-white mb-4" id="my-pets">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <h3 className="h5 fw-bold text-dark mb-0">My Pets</h3>
            <p className="text-muted small mb-0">Manage your registered pet profiles</p>
          </div>
          <button onClick={() => setShowPetModal(true)} className="btn-pill-primary py-2 px-3 small border-0 text-white" style={{ fontSize: '0.85rem' }}>
            <i className="bi bi-plus-lg"></i> Add New Pet
          </button>
        </div>

        <div className="row g-4">
          {pets.map((pet, idx) => (
            <div key={idx} className="col-md-6 col-lg-4 text-start">
              <div className="p-4 border rounded-24 h-100 d-flex flex-column justify-content-between bg-light bg-opacity-25" style={{ borderLeft: '4px solid #15803D !important' }}>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fs-1">🐾</span>
                    <span className="badge bg-light-green text-dark-green rounded-pill px-3 py-1 small fw-semibold">Active</span>
                  </div>
                  <h4 className="h5 fw-bold text-dark mb-1">{pet.name}</h4>
                  <p className="text-secondary small mb-2"><strong>Type:</strong> {pet.type} | <strong>Breed:</strong> {pet.breed}</p>
                  <p className="text-secondary small mb-2"><strong>Gender:</strong> {pet.gender} | <strong>DOB:</strong> {pet.dob}</p>
                  <p className="text-muted small mb-0 lh-sm">
                    <strong>Medical Notes:</strong> {pet.notes || 'None'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ADD PET MODAL */}
      {showPetModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowPetModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                🐾
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">Add New Pet</h3>
                <p className="text-secondary small mb-0">Create your pet profile</p>
              </div>
            </div>

            <form onSubmit={handleAddPet}>
              <div className="row g-3">
                <div className="col-md-6 text-start position-relative">
                  <label className="form-label text-dark fw-semibold small">Pet Name</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 pe-5 fs-6" 
                    placeholder="Enter name" 
                    value={newPet.name}
                    onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                    required 
                  />
                  <i className="bi bi-person position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Pet Type</label>
                  <select 
                    className="form-select rounded-16 py-3 fs-6 text-secondary" 
                    style={{ border: '1px solid #dee2e6' }}
                    value={newPet.type}
                    onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6 text-start position-relative">
                  <label className="form-label text-dark fw-semibold small">Breed</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 pe-5 fs-6" 
                    placeholder="e.g. Persian Cat" 
                    value={newPet.breed}
                    onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                    required 
                  />
                  <i className="bi bi-heart position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Gender</label>
                  <select 
                    className="form-select rounded-16 py-3 fs-6 text-secondary" 
                    style={{ border: '1px solid #dee2e6' }}
                    value={newPet.gender}
                    onChange={(e) => setNewPet({ ...newPet, gender: e.target.value })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Date of Birth</label>
                  <input 
                    type="date" 
                    className="form-control rounded-16 py-3 fs-6 text-secondary" 
                    value={newPet.dob}
                    onChange={(e) => setNewPet({ ...newPet, dob: e.target.value })}
                    required 
                  />
                </div>
                <div className="col-12 text-start position-relative">
                  <label className="form-label text-dark fw-semibold small">Medical Notes</label>
                  <textarea 
                    className="form-control rounded-16 py-3 pe-5 fs-6" 
                    rows="2" 
                    placeholder="Any allergies, existing conditions, or medications..." 
                    value={newPet.notes}
                    onChange={(e) => setNewPet({ ...newPet, notes: e.target.value })}
                  ></textarea>
                  <i className="bi bi-pencil position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                </div>
              </div>

              <div className="d-flex gap-3 mt-4 pt-2">
                <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center">
                  Save Pet
                </button>
                <button type="button" onClick={() => setShowPetModal(false)} className="btn btn-outline-secondary rounded-pill-custom w-100 py-3 fw-semibold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default OwnerPetsPage;
