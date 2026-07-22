import React from 'react';

const CommunityQuestions = () => {
  const questions = [
    {
      title: 'Is it normal for a golden retriever puppy to lose appetite during teething?',
      category: 'Dogs',
      icon: '🐶'
    },
    {
      title: 'What is the best vaccination schedule for indoor tabby cats under 1 year old?',
      category: 'Cats',
      icon: '🐱'
    },
    {
      title: 'How can I safely treat mild skin rash on my rabbit at home?',
      category: 'Rabbits',
      icon: '🐰'
    },
    {
      title: 'Are sudden behavior changes in parrots linked to nutrition deficiencies?',
      category: 'Birds',
      icon: '🦜'
    }
  ];

  return (
    <section className="py-5 bg-light-green bg-opacity-25 rounded-24 mx-2 my-5">
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge-pill-custom mb-3">💬 Q&A Forum</span>
          <h2 className="display-6 fw-bold text-dark-green mb-3">Latest Community Questions</h2>
          <p className="text-secondary col-lg-7 mx-auto">
            Browse recent pet health questions answered by our verified veterinary clinics.
          </p>
        </div>
        <div className="row g-4 mt-2">
          {questions.map((q, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="question-card">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fs-2">{q.icon}</span>
                    <span className="q-badge-answered">
                      <i className="bi bi-patch-check"></i> Answered
                    </span>
                  </div>
                  <span className="q-category d-block mb-2">{q.category}</span>
                  <h3 className="h6 fw-bold text-dark mb-4 lh-base" style={{ minHeight: '60px' }}>{q.title}</h3>
                </div>
                <button className="btn-pill-outline w-100 py-2 d-flex justify-content-center align-items-center mt-3">
                  View Answer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityQuestions;
