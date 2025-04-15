import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Welcomepage = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: '➕ Add Book', route: '/add-book' },
    { label: '❌ Delete Book', route: '/delete-book' },
    { label: '📖 View Books', route: '/books' },
    { label: '📤 Issue Book', route: '/issue-book' },
    { label: '✏️ Edit Book', route: '/edit-book' },
  ];

  return (
    <div className="welcome-page">
      <div className="welcome-container-bg">
        <div className="welcome-overlay">
          <div className="welcome-box">
            <h1>📚 Welcome to</h1>
            <h2>Book Management Dashboard</h2>
            <p className="welcome-subtext">
              Manage your collection effortlessly with modern tools and features.
            </p>

            <div className="welcome-buttons">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  className="welcome-button"
                  onClick={() => navigate(btn.route)}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === About Section === */}
      <div className="extra-section">
        <h2>📌 About This Platform</h2>
        <p>
          BookSys is a modern platform designed to help schools, libraries, and
          individuals manage their books efficiently. Add, delete, issue, and edit
          book records — all from one sleek dashboard.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>🔍 Easy Search</h3>
            <p>Find books instantly with advanced search and filters.</p>
          </div>
          <div className="feature-card">
            <h3>📦 Inventory Control</h3>
            <p>Track how many copies are available and which are issued.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Reports</h3>
            <p>Generate statistics on book usage, inventory, and more.</p>
          </div>
        </div>
      </div>

      {/* === Testimonials Section === */}
      <div className="testimonial-section">
        <h2>💬 What Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"BookSys made managing our school library super easy. Highly recommend!"</p>
            <span>- Ayesha, Librarian</span>
          </div>
          <div className="testimonial">
            <p>"I love how I can issue and track books without paperwork!"</p>
            <span>- Ahmed, Student</span>
          </div>
        </div>
      </div>

      {/* === Call to Action Section === */}
      <div className="cta-section">
        <h2>🚀 Ready to get started?</h2>
        <p>Explore the book catalog or manage your collection now!</p>
        <button className="cta-button" onClick={() => navigate('/books')}>Explore Books</button>
      </div>
    </div>
  );
};

export default Welcomepage;
