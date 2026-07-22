import React, { useState, useEffect } from 'react';
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

const OwnerQuestionsPage = () => {
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

  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [newQuestion, setNewQuestion] = useState({ title: '', category: 'Disease', petName: '', desc: '' });

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const newQ = {
      id: questions.length + 1,
      ownerId: 'owner-1',
      petId: newQuestion.petName === 'Buddy' ? 'pet-1' : 'pet-2',
      petName: newQuestion.petName || 'Buddy',
      petType: newQuestion.petName === 'Kitty' ? 'Cat' : 'Dog',
      category: newQuestion.category,
      title: newQuestion.title,
      description: newQuestion.desc,
      status: 'Pending',
      answer: '',
      clinicName: '-',
      askedDate: formattedDate,
      answeredDate: '',
      // Map compatibility fields
      date: formattedDate,
      latestAnswer: '-'
    };
    const updated = [newQ, ...questions];
    setQuestions(updated);
    localStorage.setItem('pet_clinic_questions', JSON.stringify(updated));
    setShowQuestionModal(false);
    setNewQuestion({ title: '', category: 'Disease', petName: '', desc: '' });
  };

  const viewAnswerDetails = (q) => {
    setSelectedAnswer({
      question: q.title || q.question,
      category: q.category,
      clinic: q.status === 'Pending' ? '-' : (q.clinicName || q.latestAnswer || 'Verified Clinic'),
      answer: q.status === 'Pending' ? 'Waiting for clinic response' : (q.answer || 'Please bring your pet for clinical examinations.'),
      date: q.askedDate || q.date || q.createdDate || 'July 23, 2026',
      status: q.status
    });
    setShowAnswerModal(true);
  };

  return (
    <DashboardLayout>
      <div className="card-custom p-4 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <h3 className="h5 fw-bold text-dark mb-0">My Questions</h3>
            <p className="text-muted small mb-0">Track your pet related questions and clinic responses</p>
          </div>
          <button onClick={() => setShowQuestionModal(true)} className="btn-pill-primary py-2 px-3 small border-0 text-white" style={{ fontSize: '0.85rem' }}>
            <i className="bi bi-plus-lg"></i> Ask New Question
          </button>
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
                  <td className="py-3 fw-bold text-dark small">{q.title}</td>
                  <td className="py-3"><span className="badge bg-light text-dark border rounded-pill px-2 py-1 small">{q.category}</span></td>
                  <td className="py-3 small text-secondary">{q.date || q.createdDate}</td>
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

      {/* ASK QUESTION MODAL */}
      {showQuestionModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowQuestionModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-chat-right-text"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">Ask a New Question</h3>
                <p className="text-secondary small mb-0">Get help from approved pet clinics</p>
              </div>
            </div>

            <form onSubmit={handleAddQuestion}>
              <div className="row g-3">
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Pet Selection</label>
                  <select 
                    className="form-select rounded-16 py-3 fs-6 text-secondary" 
                    style={{ border: '1px solid #dee2e6' }}
                    value={newQuestion.petName}
                    onChange={(e) => setNewQuestion({ ...newQuestion, petName: e.target.value })}
                    required
                  >
                    <option value="">Select Pet</option>
                    <option value="Buddy">Buddy</option>
                    <option value="Kitty">Kitty</option>
                  </select>
                </div>
                <div className="col-md-6 text-start">
                  <label className="form-label text-dark fw-semibold small">Question Category</label>
                  <select 
                    className="form-select rounded-16 py-3 fs-6 text-secondary" 
                    style={{ border: '1px solid #dee2e6' }}
                    value={newQuestion.category}
                    onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
                    required
                  >
                    <option value="Disease">Disease</option>
                    <option value="Vaccines">Vaccines</option>
                    <option value="Pet Food">Pet Food</option>
                    <option value="Pet Care">Pet Care</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12 text-start position-relative">
                  <label className="form-label text-dark fw-semibold small">Question Title</label>
                  <input 
                    type="text" 
                    className="form-control rounded-16 py-3 pe-5 fs-6" 
                    placeholder="Enter your question title" 
                    value={newQuestion.title}
                    onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                    required 
                  />
                  <i className="bi bi-chat-dots position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                </div>
                <div className="col-12 text-start position-relative">
                  <label className="form-label text-dark fw-semibold small">Question Description</label>
                  <textarea 
                    className="form-control rounded-16 py-3 pe-5 fs-6" 
                    rows="3" 
                    placeholder="Describe your pet problem or question..." 
                    value={newQuestion.desc}
                    onChange={(e) => setNewQuestion({ ...newQuestion, desc: e.target.value })}
                    required
                  ></textarea>
                  <i className="bi bi-pencil position-absolute text-muted" style={{ right: '20px', top: '48px', fontSize: '1rem' }}></i>
                </div>
              </div>

              <div className="d-flex gap-3 mt-4 pt-2">
                <button type="submit" className="btn-pill-primary w-100 py-3 justify-content-center">
                  Submit Question
                </button>
                <button type="button" onClick={() => setShowQuestionModal(false)} className="btn btn-outline-secondary rounded-pill-custom w-100 py-3 fw-semibold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW ANSWER MODAL */}
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
                <h3 className="h5 fw-bold text-dark mb-0">Question Details</h3>
                <span className="text-muted small">Asked Date: {selectedAnswer.date}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="fw-bold text-dark d-block mb-1">Question</span>
              <p className="text-secondary small bg-light p-3 rounded-16 mb-3">"{selectedAnswer.question}"</p>

              <span className="fw-bold text-dark d-block mb-1">Category</span>
              <p className="text-secondary mb-3"><span className="badge bg-light text-dark border rounded-pill px-2 py-1 small">{selectedAnswer.category}</span></p>

              <span className="fw-bold text-dark d-block mb-1">Clinic Partner</span>
              <p className="text-primary-green fw-semibold mb-3">{selectedAnswer.clinic}</p>

              <span className="fw-bold text-dark d-block mb-1">Response</span>
              {selectedAnswer.status === 'Pending' ? (
                <p className="text-warning fw-semibold bg-warning bg-opacity-10 p-3 rounded-16 small">
                  <i className="bi bi-clock"></i> Waiting for clinic response
                </p>
              ) : (
                <p className="text-muted small lh-base">{selectedAnswer.answer}</p>
              )}
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

export default OwnerQuestionsPage;
