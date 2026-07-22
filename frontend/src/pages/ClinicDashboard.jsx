import React, { useState, useEffect } from 'react';
import ClinicLayout from '../components/ClinicLayout/ClinicLayout';

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

const ClinicDashboard = () => {
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

  // Selected item state for modals
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [answerInput, setAnswerInput] = useState('');

  const handleOpenAnswer = (q) => {
    setSelectedQuestion(q);
    setAnswerInput('');
    setShowAnswerModal(true);
  };

  const handleOpenView = (q) => {
    setSelectedQuestion(q);
    setShowViewModal(true);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const updated = questions.map(q => q.id === selectedQuestion.id ? {
      ...q,
      status: 'Answered',
      answer: answerInput,
      clinicName: 'Happy Paws Clinic',
      answeredDate: formattedDate,
      // Map legacy fields
      answerText: answerInput,
      latestAnswer: 'Happy Paws Clinic',
      date: q.date || formattedDate
    } : q);
    
    setQuestions(updated);
    localStorage.setItem('pet_clinic_questions', JSON.stringify(updated));
    setShowAnswerModal(false);
    setSelectedQuestion(null);
  };

  const newQuestionsCount = questions.filter(q => q.status === 'Pending').length;
  const answeredQuestionsCount = 20 + questions.filter(q => q.status === 'Answered').length;
  const totalQuestionsCount = 20 + questions.length;

  return (
    <ClinicLayout>
      {/* Welcome Section */}
      <div className="d-flex justify-content-between align-items-center flex-wrap g-3 mb-4">
        <div>
          <h2 className="h5 fw-bold text-dark mb-1">Welcome back, Happy Paws Clinic! 🐾</h2>
          <p className="text-muted small mb-0">Manage pet owner questions and provide professional answers.</p>
        </div>
        <div className="bg-white rounded-16 py-2 px-4 shadow-sm border d-flex align-items-center gap-2 mt-3 mt-sm-0 text-secondary small font-semibold">
          <i className="bi bi-calendar3"></i> Wednesday, July 22, 2026
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="row g-4 mb-4">
        {/* New Questions */}
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">New Questions</span>
              <h3 className="h3 fw-bold text-warning mb-1">
                {newQuestionsCount < 10 ? `0${newQuestionsCount}` : newQuestionsCount}
              </h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Questions waiting for your answers</span>
            </div>
            <div className="icon-circle bg-warning bg-opacity-10 text-warning mb-0" style={{ width: '50px', height: '50px' }}>
              <i className="bi bi-patch-question"></i>
            </div>
          </div>
        </div>
        {/* Answered Questions */}
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">Answered Questions</span>
              <h3 className="h3 fw-bold text-success mb-1">{answeredQuestionsCount}</h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Questions answered successfully</span>
            </div>
            <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
              <i className="bi bi-chat-square-text"></i>
            </div>
          </div>
        </div>
        {/* Total Questions */}
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">Total Questions</span>
              <h3 className="h3 fw-bold text-primary mb-1">{totalQuestionsCount}</h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Total questions received</span>
            </div>
            <div className="icon-circle bg-light bg-opacity-75 text-primary mb-0" style={{ width: '50px', height: '50px' }}>
              <i className="bi bi-chat-left-text"></i>
            </div>
          </div>
        </div>
        {/* Clinic Rating */}
        <div className="col-xl-3 col-sm-6">
          <div className="card-custom d-flex align-items-center justify-content-between p-4 bg-white">
            <div>
              <span className="text-muted small d-block mb-1">Clinic Rating</span>
              <h3 className="h3 fw-bold text-purple mb-1" style={{ color: '#8b5cf6' }}>4.8</h3>
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Average pet owner rating</span>
            </div>
            <div className="icon-circle bg-purple bg-opacity-10 mb-0" style={{ width: '50px', height: '50px', color: '#8b5cf6', backgroundColor: '#f5f3ff' }}>
              <i className="bi bi-star"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Questions Table */}
      <div className="card-custom p-4 bg-white">
        <h3 className="h5 fw-bold text-dark mb-4 text-start">Recent Questions</h3>
        
        <div className="table-responsive">
          <table className="table align-middle border-light">
            <thead>
              <tr className="text-secondary small fw-semibold border-bottom">
                <th className="py-3">#</th>
                <th className="py-3">Pet Owner</th>
                <th className="py-3">Pet Name</th>
                <th className="py-3">Pet Type</th>
                <th className="py-3">Question</th>
                <th className="py-3">Category</th>
                <th className="py-3">Asked Date</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, idx) => (
                <tr key={q.id} className="border-bottom border-light">
                  <td className="py-3 small text-muted">0{idx + 1}</td>
                  <td className="py-3 fw-bold text-dark">{q.ownerName || 'Anjali Silva'}</td>
                  <td className="py-3 small">{q.petName || 'Buddy'}</td>
                  <td className="py-3 small">{q.petType || 'Dog'}</td>
                  <td className="py-3 small text-dark fw-medium">"{q.title || q.question}"</td>
                  <td className="py-3"><span className="badge bg-light text-dark border rounded-pill px-2 py-1 small">{q.category}</span></td>
                  <td className="py-3 small text-secondary">{q.askedDate || q.date}</td>
                  <td className="py-3 text-center">
                    <span className={`badge rounded-pill px-3 py-2 small fw-semibold ${q.status === 'Answered' ? 'bg-light-green text-dark-green' : 'bg-warning bg-opacity-15 text-warning'}`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    {q.status === 'Pending' ? (
                      <button onClick={() => handleOpenAnswer(q)} className="btn-pill-primary py-2 px-3 small border-0 text-white" style={{ fontSize: '0.75rem' }}>
                        Answer
                      </button>
                    ) : (
                      <button onClick={() => handleOpenView(q)} className="btn-pill-outline py-2 px-3 small" style={{ fontSize: '0.75rem' }}>
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ANSWER MODAL */}
      {showAnswerModal && selectedQuestion && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowAnswerModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-patch-question-fill"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">Provide Veterinary Advice</h3>
                <p className="text-secondary small mb-0">From Happy Paws Clinic</p>
              </div>
            </div>

            <form onSubmit={handleSubmitAnswer}>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <span className="fw-semibold text-dark d-block small mb-1">Pet Owner Name</span>
                  <span className="text-secondary small">{selectedQuestion.ownerName || 'Anjali Silva'} ({selectedQuestion.petName || 'Buddy'} - {selectedQuestion.petType || 'Dog'})</span>
                </div>
                <div className="col-md-6">
                  <span className="fw-semibold text-dark d-block small mb-1">Category</span>
                  <span className="badge bg-light text-dark border rounded-pill px-2 py-1 small">{selectedQuestion.category}</span>
                </div>
                <div className="col-12 text-start">
                  <span className="fw-semibold text-dark d-block small mb-1">Question</span>
                  <p className="text-secondary small bg-light p-3 rounded-16 mb-2">"{selectedQuestion.title || selectedQuestion.question}"</p>
                  {(selectedQuestion.description || selectedQuestion.desc) && (
                    <>
                      <span className="fw-semibold text-dark d-block small mb-1">Details</span>
                      <p className="text-muted small bg-light p-3 rounded-16 mb-0">{selectedQuestion.description || selectedQuestion.desc}</p>
                    </>
                  )}
                </div>
                {/* Answer Text Area */}
                <div className="col-12 text-start position-relative mt-3">
                  <label className="form-label text-dark fw-semibold small">Answer Message</label>
                  <textarea 
                    className="form-control rounded-16 py-3 pe-5 fs-6" 
                    rows="4" 
                    placeholder="Provide professional advice or clinic recommendations..." 
                    value={answerInput}
                    onChange={(e) => setAnswerInput(e.target.value)}
                    required
                  ></textarea>
                  <i className="bi bi-pencil position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                </div>
              </div>

              <div className="d-flex gap-3">
                <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center">
                  Submit Answer
                </button>
                <button type="button" onClick={() => setShowAnswerModal(false)} className="btn btn-outline-secondary rounded-pill-custom w-100 py-3 fw-semibold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW DETAILS MODAL */}
      {showViewModal && selectedQuestion && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowViewModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">Answer Details</h3>
                <span className="text-secondary small">Submitted on: {selectedQuestion.answeredDate}</span>
              </div>
            </div>

            <div className="mb-4">
              <span className="fw-bold text-dark d-block mb-1">Question</span>
              <p className="text-secondary small bg-light p-3 rounded-16 mb-3">"{selectedQuestion.question}"</p>

              <span className="fw-bold text-dark d-block mb-1">Answered Advice</span>
              <p className="text-muted small lh-base">{selectedQuestion.answerText}</p>
            </div>

            <button onClick={() => setShowViewModal(false)} className="btn-pill-primary py-3 px-5 mx-auto d-flex justify-content-center">
              Close View
            </button>
          </div>
        </div>
      )}
    </ClinicLayout>
  );
};

export default ClinicDashboard;
