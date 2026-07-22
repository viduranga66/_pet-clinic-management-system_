import React, { useState, useEffect } from 'react';
import ClinicLayout from '../components/ClinicLayout/ClinicLayout';

const ClinicQuestionsPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('pet_clinic_questions');
    if (saved) {
      const allQuestions = JSON.parse(saved);
      setHistory(allQuestions.filter(q => q.status === 'Answered'));
    }
  }, []);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenView = (item) => {
    setSelectedAnswer(item);
    setShowModal(true);
  };

  return (
    <ClinicLayout>
      <div className="card-custom p-4 bg-white">
        <h3 className="h5 fw-bold text-dark mb-1 text-start">Question History</h3>
        <p className="text-muted small mb-4 text-start">Display previously answered questions from pet owners</p>

        <div className="table-responsive">
          <table className="table align-middle border-light">
            <thead>
              <tr className="text-secondary small fw-semibold border-bottom">
                <th className="py-3">#</th>
                <th className="py-3">Pet Owner</th>
                <th className="py-3">Pet Name</th>
                <th className="py-3">Question</th>
                <th className="py-3">Category</th>
                <th className="py-3">Answer</th>
                <th className="py-3">Answered Date</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, idx) => (
                <tr key={h.id} className="border-bottom border-light">
                  <td className="py-3 small text-muted">0{idx + 1}</td>
                  <td className="py-3 fw-bold text-dark">{h.ownerName || 'Anjali Silva'}</td>
                  <td className="py-3 small">{h.petName || 'Buddy'}</td>
                  <td className="py-3 small">"{h.title || h.question}"</td>
                  <td className="py-3"><span className="badge bg-light text-dark border rounded-pill px-2 py-1 small">{h.category}</span></td>
                  <td className="py-3 small text-muted text-truncate" style={{ maxWidth: '200px' }}>{h.answer}</td>
                  <td className="py-3 small text-secondary">{h.answeredDate}</td>
                  <td className="py-3 text-center">
                    <button onClick={() => handleOpenView(h)} className="btn-pill-outline py-2 px-3 small" style={{ fontSize: '0.75rem' }}>
                      View Answer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VIEW ANSWER MODAL */}
      {showModal && selectedAnswer && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 2000, backdropFilter: 'blur(3px)' }}>
          <div className="card-custom bg-white p-5 text-start shadow-lg position-relative" style={{ maxWidth: '600px', width: '90%' }}>
            <button onClick={() => setShowModal(false)} className="btn position-absolute top-0 end-0 m-3 border-0 fs-5 text-secondary">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-light">
              <div className="icon-circle bg-light-green text-primary-green mb-0" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <div>
                <h3 className="h5 fw-bold text-dark mb-0">Clinic Advice Details</h3>
                <span className="text-secondary small">Submitted on: {selectedAnswer.answeredDate}</span>
              </div>
            </div>

            <div className="mb-4">
              <span className="fw-bold text-dark d-block mb-1">Question from {selectedAnswer.ownerName || 'Anjali Silva'} ({selectedAnswer.petName || 'Buddy'})</span>
              <p className="text-secondary small bg-light p-3 rounded-16 mb-3">"{selectedAnswer.title || selectedAnswer.question}"</p>

              <span className="fw-bold text-dark d-block mb-1">Answered Advice</span>
              <p className="text-muted small lh-base">"{selectedAnswer.answer}"</p>
            </div>

            <button onClick={() => setShowModal(false)} className="btn-pill-primary py-3 px-5 mx-auto d-flex justify-content-center">
              Close View
            </button>
          </div>
        </div>
      )}
    </ClinicLayout>
  );
};

export default ClinicQuestionsPage;
