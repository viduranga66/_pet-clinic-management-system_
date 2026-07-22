import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout/AdminLayout';

const defaultRequests = [
  {
    id: 1,
    clinicName: 'Happy Paws Clinic',
    ownerName: 'Dr. Nimal Perera',
    email: 'info@happypaws.lk',
    phone: '+94 71 555 4321',
    address: '12 Temple Rd, Gampaha',
    district: 'Gampaha',
    licenseNumber: 'VET-2025-9981',
    operatingHours: '08:00 AM - 06:00 PM',
    servicesOffered: 'Vaccinations, Surgery, Grooming',
    description: 'We care for all companion animals.',
    status: 'PENDING',
    createdDate: 'May 22, 2025'
  },
  {
    id: 2,
    clinicName: 'Pet Care Center',
    ownerName: 'Dr. Sanduni Silva',
    email: 'contact@petcare.lk',
    phone: '+94 77 222 1100',
    address: '88 Galle Rd, Colombo 03',
    district: 'Colombo',
    licenseNumber: 'VET-2024-8176',
    operatingHours: '09:00 AM - 05:00 PM',
    servicesOffered: 'General Checkups, Diagnostics',
    description: 'Affordable family vet center.',
    status: 'PENDING',
    createdDate: 'May 22, 2025'
  },
  {
    id: 3,
    clinicName: 'Vet Life Hospital',
    ownerName: 'Dr. K. Jayasinghe',
    email: 'vetlife@hospital.lk',
    phone: '+94 81 444 8877',
    address: '254 Peradeniya Rd, Kandy',
    district: 'Kandy',
    licenseNumber: 'VET-2025-4509',
    operatingHours: '24 Hours',
    servicesOffered: 'Emergency services, In-patient care',
    description: 'Premier animal hospital in central region.',
    status: 'PENDING',
    createdDate: 'May 21, 2025'
  }
];

const AdminClinicRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('pet_clinic_requests');
    if (saved) {
      setRequests(JSON.parse(saved));
    } else {
      localStorage.setItem('pet_clinic_requests', JSON.stringify(defaultRequests));
      setRequests(defaultRequests);
    }
  }, []);

  const handleOpenDetails = (req) => {
    setSelectedRequest(req);
    setShowModal(true);
  };

  const handleApprove = (req) => {
    // Validation before action
    if (!req.clinicName || !req.ownerName || !req.licenseNumber || !req.email) {
      alert('Cannot approve request: Required details (Clinic Name, Owner Name, License Number, Email) are missing!');
      return;
    }

    // Update status in requests
    const updatedRequests = requests.map(r => r.id === req.id ? { ...r, status: 'APPROVED' } : r);
    setRequests(updatedRequests);
    localStorage.setItem('pet_clinic_requests', JSON.stringify(updatedRequests));

    // Save into approved clinics list
    const savedClinics = localStorage.getItem('pet_clinics');
    const clinicsList = savedClinics ? JSON.parse(savedClinics) : [];
    
    // Check duplicate
    if (!clinicsList.some(c => c.licenseNumber === req.licenseNumber)) {
      const newClinic = {
        id: clinicsList.length + 1,
        clinicName: req.clinicName,
        ownerName: req.ownerName,
        email: req.email,
        phone: req.phone,
        address: req.address,
        district: req.district,
        licenseNumber: req.licenseNumber,
        status: 'APPROVED',
        createdDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      };
      const updatedClinics = [...clinicsList, newClinic];
      localStorage.setItem('pet_clinics', JSON.stringify(updatedClinics));
    }

    setShowModal(false);
    setSelectedRequest(null);
    alert('Clinic registration request APPROVED successfully!');
  };

  const handleReject = (req) => {
    const updatedRequests = requests.map(r => r.id === req.id ? { ...r, status: 'REJECTED' } : r);
    setRequests(updatedRequests);
    localStorage.setItem('pet_clinic_requests', JSON.stringify(updatedRequests));
    setShowModal(false);
    setSelectedRequest(null);
    alert('Clinic registration request REJECTED.');
  };

  return (
    <AdminLayout>
      <div className="card-custom p-4 bg-white">
        <h3 className="h5 fw-bold text-dark mb-1">Clinic Registration Requests</h3>
        <p className="text-muted small mb-4">View, evaluate, and approve clinic registration requests</p>

        <div className="table-responsive">
          <table className="table align-middle border-light">
            <thead>
              <tr className="text-secondary small fw-semibold border-bottom">
                <th className="py-3">#</th>
                <th className="py-3">Clinic Name</th>
                <th className="py-3">Owner Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Phone</th>
                <th className="py-3">District</th>
                <th className="py-3">License</th>
                <th className="py-3">Submitted</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => (
                <tr key={req.id} className="border-bottom border-light">
                  <td className="py-3 small text-muted">0{idx + 1}</td>
                  <td className="py-3 fw-bold text-dark">{req.clinicName}</td>
                  <td className="py-3 small">{req.ownerName}</td>
                  <td className="py-3 small text-secondary">{req.email}</td>
                  <td className="py-3 small text-secondary">{req.phone}</td>
                  <td className="py-3 small text-secondary">{req.district}</td>
                  <td className="py-3 small text-secondary">{req.licenseNumber}</td>
                  <td className="py-3 small text-secondary">{req.createdDate}</td>
                  <td className="py-3 text-center">
                    <span className={`badge rounded-pill px-3 py-2 small fw-semibold ${
                      req.status === 'APPROVED' ? 'bg-light-green text-dark-green' :
                      req.status === 'REJECTED' ? 'bg-danger bg-opacity-10 text-danger' :
                      'bg-warning bg-opacity-15 text-warning'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      <button onClick={() => handleOpenDetails(req)} className="btn btn-outline-secondary rounded-pill-custom py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                        View Details
                      </button>
                      {req.status === 'PENDING' && (
                        <>
                          <button onClick={() => handleApprove(req)} className="btn-pill-primary py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                            Approve
                          </button>
                          <button onClick={() => handleReject(req)} className="btn btn-outline-danger rounded-pill-custom py-1 px-3 small" style={{ fontSize: '0.75rem' }}>
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VIEW DETAILS MODAL */}
      {showModal && selectedRequest && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '650px', width: '90%' }}>
            <button onClick={() => setShowModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-building"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">{selectedRequest.clinicName}</h3>
                <span className="text-muted small">Request Review</span>
              </div>
            </div>

            <div className="row g-3 small text-secondary mb-4">
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Owner Name</span>
                <span>{selectedRequest.ownerName}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">License Number</span>
                <span>{selectedRequest.licenseNumber}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Email</span>
                <span>{selectedRequest.email}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Phone</span>
                <span>{selectedRequest.phone}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">District</span>
                <span>{selectedRequest.district}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Operating Hours</span>
                <span>{selectedRequest.operatingHours}</span>
              </div>
              <div className="col-12">
                <span className="fw-semibold text-dark d-block">Address</span>
                <span>{selectedRequest.address}</span>
              </div>
              <div className="col-12">
                <span className="fw-semibold text-dark d-block">Services Offered</span>
                <span>{selectedRequest.servicesOffered}</span>
              </div>
              <div className="col-12">
                <span className="fw-semibold text-dark d-block">Clinic Description</span>
                <span>{selectedRequest.description}</span>
              </div>
            </div>

            <div className="d-flex gap-3">
              {selectedRequest.status === 'PENDING' ? (
                <>
                  <button onClick={() => handleApprove(selectedRequest)} className="btn-pill-primary w-100 py-3 justify-content-center">
                    Approve Request
                  </button>
                  <button onClick={() => handleReject(selectedRequest)} className="btn btn-outline-danger rounded-pill-custom w-100 py-3 fw-semibold">
                    Reject Request
                  </button>
                </>
              ) : (
                <button onClick={() => setShowModal(false)} className="btn-pill-primary py-3 px-5 mx-auto d-flex justify-content-center">
                  Close View
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminClinicRequestsPage;
