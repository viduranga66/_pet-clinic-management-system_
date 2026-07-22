import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout/DashboardLayout';

const defaultQuestions = [
  {
    id: 1,
    ownerId: 'owner-1',
    petId: 'pet-1',
    petName: 'Buddy',
    petType: 'Dog',
    category: 'Disease',
    title: 'My dog has fever and not eating',
    description: 'He has been lethargic since yesterday and refusing food.',
    status: 'Answered',
    answer: 'Please bring your pet for clinical examinations. Teething puppies sometimes exhibit low appetite, but clinical checks are recommended.',
    clinicName: 'Happy Paws Clinic',
    askedDate: 'May 22, 2026',
    answeredDate: 'May 22, 2026'
  },
  {
    id: 2,
    ownerId: 'owner-1',
    petId: 'pet-1',
    petName: 'Buddy',
    petType: 'Dog',
    category: 'Pet Food',
    title: 'Best food for puppies?',
    description: 'Looking for organic food recommendations for a 3-month pup.',
    status: 'Answered',
    answer: 'We recommend protein-rich formulas specifically balanced with DHA for development. Avoid raw meats early on.',
    clinicName: 'Pet Care Veterinary',
    askedDate: 'May 22, 2026',
    answeredDate: 'May 22, 2026'
  },
  {
    id: 3,
    ownerId: 'owner-1',
    petId: 'pet-2',
    petName: 'Kitty',
    petType: 'Cat',
    category: 'Vaccines',
    title: 'When should I vaccinate my cat?',
    description: 'She is 2 months old and has not received any shots yet.',
    status: 'Pending',
    answer: '',
    clinicName: '-',
    askedDate: 'May 21, 2026',
    answeredDate: ''
  },
  {
    id: 4,
    ownerId: 'owner-1',
    petId: 'pet-3',
    petName: 'Bunny',
    petType: 'Rabbit',
    category: 'Disease',
    title: 'Skin problem on my rabbit',
    description: 'Noticed small red patches near the ears.',
    status: 'Answered',
    answer: 'Apply topical rabbit-safe treatments recommended by your vet.',
    clinicName: 'Paws & Claws Clinic',
    askedDate: 'May 21, 2026',
    answeredDate: 'May 21, 2026'
  }
];

const PetOwnerDashboard = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('pet_clinic_questions');
    if (saved) {
      setQuestions(JSON.parse(saved));
    } else {
      localStorage.setItem('pet_clinic_questions', JSON.stringify(defaultQuestions));
      setQuestions(defaultQuestions);
    }
  }, []);

  // Mock registered pets
  const [pets] = useState([
    { name: 'Buddy', type: 'Dog', breed: 'Golden Retriever' },
    { name: 'Kitty', type: 'Cat', breed: 'Persian Cat' }
  ]);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  const viewAnswerDetails = (q) => {
    setSelectedAnswer({
      question: q.title || q.question,
      clinic: (q.clinicName === '-' || !q.clinicName) ? 'N/A' : q.clinicName,
      answer: q.status === 'Pending' ? 'Waiting for verified clinics...' : (q.answer || 'Please bring your pet for clinical examinations.'),
      date: q.askedDate || q.date
    });
    setShowAnswerModal(true);
  };

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="d-flex justify-content-between align-items-center flex-wrap g-3 mb-4">
        <div>
          <h2 className="h5 fw-bold text-dark mb-1">Welcome back, Anjali! 🐾</h2>
          <p className="text-muted small mb-0">Ask questions, get answers from clinics, and keep your pets healthy.</p>
        </div>
        <div className="bg-white rounded-16 py-2 px-4 shadow-sm border d-flex align-items-center gap-2 mt-3 mt-sm-0 text-secondary small font-semibold">
          <i className="bi bi-calendar3"></i> Wednesday, July 22, 2026
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">My Questions</span>
              <h3 className="h3 fw-bold text-success mb-1">{questions.length}</h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Total questions asked</span>
            </div>
            <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
              <i className="bi bi-chat-left-text"></i>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">Answered Questions</span>
              <h3 className="h3 fw-bold text-primary mb-1">{questions.filter(q => q.status === 'Answered').length}</h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Questions answered by clinics</span>
            </div>
            <div className="icon-circle bg-light bg-opacity-75 text-primary mb-0" style={{ width: '50px', height: '50px' }}>
              <i className="bi bi-chat-square-text"></i>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">Pending Questions</span>
              <h3 className="h3 fw-bold text-warning mb-1">{questions.filter(q => q.status === 'Pending').length}</h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Waiting for clinic response</span>
            </div>
            <div className="icon-circle bg-warning bg-opacity-10 text-warning mb-0" style={{ width: '50px', height: '50px' }}>
              <i className="bi bi-clock"></i>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">My Pets</span>
              <h3 className="h3 fw-bold text-purple mb-1" style={{ color: '#8b5cf6' }}>{pets.length}</h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Registered pets</span>
            </div>
            <div className="icon-circle bg-purple bg-opacity-10 mb-0" style={{ width: '50px', height: '50px', color: '#8b5cf6', backgroundColor: '#f5f3ff' }}>
              <i className="bi bi-heart-pulse"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="row g-4 mb-4">
        {/* Left column - Preview table */}
        <div className="col-lg-8">
          <div className="card-custom p-4 bg-white h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">My Questions</h3>
                <p className="text-muted small mb-0">Track your pet related questions and clinic responses</p>
              </div>
              <Link to="/owner/questions" className="text-primary-green small fw-semibold text-decoration-none">View all questions →</Link>
            </div>

            <div className="table-responsive">
              <table className="table align-middle border-light">
                <thead>
                  <tr className="text-secondary small fw-semibold border-bottom">
                    <th className="py-3">#</th>
                    <th className="py-3">Question</th>
                    <th className="py-3">Category</th>
                    <th className="py-3">Asked Date</th>
                    <th className="py-3 text-center">Status</th>
                    <th className="py-3">Latest Answer</th>
                    <th className="py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((q, idx) => (
                    <tr key={q.id} className="border-bottom border-light">
                      <td className="py-3 small text-muted">0{idx + 1}</td>
                      <td className="py-3 fw-bold text-dark small">{q.title || q.question}</td>
                      <td className="py-3"><span className="badge bg-light text-dark border rounded-pill px-2 py-1 small">{q.category}</span></td>
                      <td className="py-3 small text-secondary">{q.date || q.askedDate}</td>
                      <td className="py-3 text-center">
                        <span className={`badge rounded-pill px-3 py-2 small fw-semibold ${q.status === 'Answered' ? 'bg-light-green text-dark-green' : 'bg-warning bg-opacity-15 text-warning'}`}>
                          {q.status}
                        </span>
                      </td>
                      <td className="py-3 small fw-semibold text-secondary">{q.latestAnswer || q.clinicName}</td>
                      <td className="py-3 text-center">
                        <button onClick={() => viewAnswerDetails(q)} className="btn-pill-outline py-2 px-3 small" style={{ fontSize: '0.75rem' }}>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right column - Pets preview */}
        <div className="col-lg-4">
          <div className="card-custom p-4 bg-white h-100 d-flex flex-column justify-content-between" id="my-pets">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h5 fw-bold text-dark mb-0">My Pets</h3>
                <Link to="/owner/pets" className="text-primary-green small fw-semibold text-decoration-none">View All</Link>
              </div>

              <div className="d-flex flex-column gap-3">
                {pets.map((pet, idx) => (
                  <div key={idx} className="choose-item-card border-0 bg-light p-3 position-relative" style={{ borderLeft: '4px solid #15803D !important' }}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '45px', height: '45px', fontSize: '1.1rem' }}>
                        🐾
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-dark mb-0 d-inline-block">{pet.name}</h4>
                        <span className="badge bg-light-green text-dark-green rounded-pill ms-2 small" style={{ fontSize: '0.65rem' }}>Active</span>
                        <p className="text-secondary small mb-0">{pet.type} • {pet.breed}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Answer History list */}
      <div className="card-custom p-4 bg-white mb-4" id="clinic-answers">
        <h3 className="h5 fw-bold text-dark mb-4">Clinic Answers History</h3>
        <div className="row g-4">
          {questions.filter(q => q.status === 'Answered').map((q, idx) => (
            <div key={idx} className="col-md-6 text-start">
              <div className="p-4 border rounded-24 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className="badge-pill-custom mb-0 py-1 px-3" style={{ fontSize: '0.75rem' }}><i className="bi bi-chat-quote-fill"></i> {q.category}</span>
                    <span className="text-muted small">{q.answeredDate || q.askedDate || q.date}</span>
                  </div>
                  <h4 className="h6 fw-bold text-dark mb-2">Question: "{q.title || q.question}"</h4>
                  <p className="text-secondary small mb-3">
                    <strong>Clinic:</strong> <span className="text-primary-green fw-semibold">{q.clinicName || q.latestAnswer}</span>
                  </p>
                  <p className="text-muted small mb-0 lh-base italic">
                    "{q.answer || 'Please bring your pet for clinical examination...'}"
                  </p>
                </div>
                <button onClick={() => viewAnswerDetails(q)} className="btn-pill-outline w-100 py-2 d-flex justify-content-center align-items-center mt-4">
                  View Full Answer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Modal popup details */}
      {showAnswerModal && selectedAnswer && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowAnswerModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">Clinic Response</h3>
                <span className="text-muted small">Answered On: {selectedAnswer.date}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="fw-bold text-dark d-block mb-1">Question</span>
              <p className="text-secondary small bg-light p-3 rounded-16 mb-3">"{selectedAnswer.question}"</p>

              <span className="fw-bold text-dark d-block mb-1">Clinic Partner</span>
              <p className="text-primary-green fw-semibold mb-3">{selectedAnswer.clinic}</p>

              <span className="fw-bold text-dark d-block mb-1">Medical Advice</span>
              <p className="text-muted small lh-base">{selectedAnswer.answer}</p>
            </div>
            <button onClick={() => setShowAnswerModal(false)} className="btn-pill-primary py-3 px-5 mx-auto d-flex justify-content-center">
              Close
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default PetOwnerDashboard;
