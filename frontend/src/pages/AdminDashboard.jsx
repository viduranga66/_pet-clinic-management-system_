import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const defaultOwners = [
  { id: 1, name: 'Anjali Silva', email: 'anjali@example.com', phone: '+94 77 123 4567', registeredDate: 'May 20, 2025', status: 'Active', petsCount: 2 },
  { id: 2, name: 'Ruwan Perera', email: 'ruwan@example.com', phone: '+94 71 888 9999', registeredDate: 'May 21, 2025', status: 'Active', petsCount: 1 }
];

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [owners, setOwners] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load lists from localStorage
    const savedReqs = localStorage.getItem('pet_clinic_requests');
    if (savedReqs) {
      setRequests(JSON.parse(savedReqs));
    } else {
      localStorage.setItem('pet_clinic_requests', JSON.stringify(defaultRequests));
      setRequests(defaultRequests);
    }

    const savedClinics = localStorage.getItem('pet_clinics');
    if (savedClinics) {
      setClinics(JSON.parse(savedClinics));
    } else {
      localStorage.setItem('pet_clinics', JSON.stringify(defaultClinics));
      setClinics(defaultClinics);
    }

    const savedOwners = localStorage.getItem('pet_owner_users');
    if (savedOwners) {
      setOwners(JSON.parse(savedOwners));
    } else {
      localStorage.setItem('pet_owner_users', JSON.stringify(defaultOwners));
      setOwners(defaultOwners);
    }
  }, []);

  // Summary Metrics calculations
  const totalRequests = requests.length;
  const pendingApprovals = requests.filter(r => r.status === 'PENDING').length;
  const approvedClinicsCount = clinics.length;
  const rejectedRequests = requests.filter(r => r.status === 'REJECTED').length;
  const totalPetOwners = owners.length;

  const handleOpenView = (req) => {
    setSelectedRequest(req);
    setShowModal(true);
  };

  return (
    <AdminLayout>
      {/* Welcome Section */}
      <div className="d-flex justify-content-between align-items-center flex-wrap g-3 mb-4">
        <div>
          <h2 className="h5 fw-bold text-dark mb-1">Welcome back, Admin! 👋</h2>
          <p className="text-muted small mb-0">Here's what's happening with your system today.</p>
        </div>
        <div className="bg-white rounded-16 py-2 px-4 shadow-sm border d-flex align-items-center gap-2 mt-3 mt-sm-0 text-secondary small font-semibold">
          <i className="bi bi-calendar3"></i> Wednesday, July 22, 2026
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-xl-2 col-sm-4 col-6">
          <div className="card-custom p-4 bg-white text-center">
            <span className="text-muted small d-block mb-1">Total Requests</span>
            <h3 className="h4 fw-bold text-success mb-0">{totalRequests}</h3>
          </div>
        </div>
        <div className="col-xl-2 col-sm-4 col-6">
          <div className="card-custom p-4 bg-white text-center">
            <span className="text-muted small d-block mb-1">Pending</span>
            <h3 className="h4 fw-bold text-warning mb-0">{pendingApprovals}</h3>
          </div>
        </div>
        <div className="col-xl-3 col-sm-4 col-6">
          <div className="card-custom p-4 bg-white text-center">
            <span className="text-muted small d-block mb-1">Approved Clinics</span>
            <h3 className="h4 fw-bold text-primary mb-0">{approvedClinicsCount}</h3>
          </div>
        </div>
        <div className="col-xl-2 col-sm-6 col-6">
          <div className="card-custom p-4 bg-white text-center">
            <span className="text-muted small d-block mb-1">Rejected</span>
            <h3 className="h4 fw-bold text-danger mb-0">{rejectedRequests}</h3>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card-custom p-4 bg-white text-center">
            <span className="text-muted small d-block mb-1">Total Pet Owners</span>
            <h3 className="h4 fw-bold text-purple mb-0" style={{ color: '#8b5cf6' }}>{totalPetOwners}</h3>
          </div>
        </div>
      </div>

      {/* Analytics Charts & Recent Activity Row */}
      <div className="row g-4 mb-4">
        {/* Registration status breakdown (Donut) */}
        <div className="col-md-6 col-lg-4 text-start">
          <div className="card-custom p-4 bg-white h-100">
            <h3 className="h6 fw-bold text-dark mb-4">Clinic Registration Status</h3>
            <div className="d-flex align-items-center justify-content-center flex-column gap-3 py-3">
              <svg width="130" height="130" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="60" fill="transparent" stroke="#f1f5f9" strokeWidth="25" />
                <circle cx="80" cy="80" r="60" fill="transparent" stroke="#15803D" strokeWidth="25"
                  strokeDasharray="377" strokeDashoffset={377 - (377 * (approvedClinicsCount / (totalRequests || 1)))}
                  transform="rotate(-90 80 80)" />
              </svg>
              <div className="text-center small">
                <span className="d-block text-muted">Approval Ratio</span>
                <strong className="text-dark fs-5">{Math.round((approvedClinicsCount / (totalRequests || 1)) * 100)}% Approved</strong>
              </div>
            </div>
          </div>
        </div>

        {/* User distribution chart (SVG Bar) */}
        <div className="col-md-6 col-lg-4 text-start">
          <div className="card-custom p-4 bg-white h-100">
            <h3 className="h6 fw-bold text-dark mb-4">User Distribution Chart</h3>
            <div className="d-flex flex-column gap-3 py-2">
              <div className="small">
                <span className="text-muted d-block mb-1">Approved Clinics ({approvedClinicsCount})</span>
                <div className="progress rounded-pill" style={{ height: '10px' }}>
                  <div className="progress-bar bg-success rounded-pill" style={{ width: `${(approvedClinicsCount / (approvedClinicsCount + totalPetOwners || 1)) * 100}%` }}></div>
                </div>
              </div>
              <div className="small">
                <span className="text-muted d-block mb-1">Pet Owners ({totalPetOwners})</span>
                <div className="progress rounded-pill" style={{ height: '10px' }}>
                  <div className="progress-bar bg-primary rounded-pill" style={{ width: `${(totalPetOwners / (approvedClinicsCount + totalPetOwners || 1)) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity section */}
        <div className="col-lg-4 text-start">
          <div className="card-custom p-4 bg-white h-100">
            <h3 className="h6 fw-bold text-dark mb-3">Recent Activity</h3>
            <ul className="list-group list-group-flush small">
              <li className="list-group-item bg-transparent px-0 py-2 border-light text-muted">
                🔹 Happy Paws Clinic submitted registration request
              </li>
              <li className="list-group-item bg-transparent px-0 py-2 border-light text-muted">
                🔹 Pet Care Veterinary request status set to PENDING
              </li>
              <li className="list-group-item bg-transparent px-0 py-2 border-light text-muted">
                🔹 New pet owner Anjali Silva registered
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Clinic Requests Table */}
      <div className="card-custom p-4 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="h5 fw-bold text-dark mb-0">Recent Clinic Requests</h3>
          <Link to="/admin/clinic-requests" className="text-primary-green small fw-semibold text-decoration-none">View All Requests →</Link>
        </div>

        <div className="table-responsive">
          <table className="table align-middle border-light">
            <thead>
              <tr className="text-secondary small fw-semibold border-bottom">
                <th className="py-3">#</th>
                <th className="py-3">Clinic Name</th>
                <th className="py-3">Owner Name</th>
                <th className="py-3">District</th>
                <th className="py-3">Submitted Date</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.slice(0, 3).map((req, idx) => (
                <tr key={req.id} className="border-bottom border-light">
                  <td className="py-3 small text-muted">0{idx + 1}</td>
                  <td className="py-3 fw-bold text-dark">{req.clinicName}</td>
                  <td className="py-3 small">{req.ownerName}</td>
                  <td className="py-3 small text-secondary">{req.district}</td>
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
                    <button onClick={() => handleOpenView(req)} className="btn-pill-outline py-2 px-3 small" style={{ fontSize: '0.75rem' }}>
                      View
                    </button>
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
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-building"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">{selectedRequest.clinicName}</h3>
                <span className="text-muted small">Status: {selectedRequest.status}</span>
              </div>
            </div>

            <div className="row g-3 small text-secondary mb-4">
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Owner Name</span>
                <span>{selectedRequest.ownerName}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Licence Number</span>
                <span className="font-monospace">{selectedRequest.licenseNumber}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Email</span>
                <span>{selectedRequest.email}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Phone Number</span>
                <span>{selectedRequest.phone}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">Operating Hours</span>
                <span>{selectedRequest.operatingHours}</span>
              </div>
              <div className="col-sm-6">
                <span className="fw-semibold text-dark d-block">District</span>
                <span>{selectedRequest.district}</span>
              </div>
              <div className="col-12">
                <span className="fw-semibold text-dark d-block">Clinic Address</span>
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

            <button onClick={() => setShowModal(false)} className="btn-pill-primary py-3 px-5 mx-auto d-flex justify-content-center">
              Close View
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
