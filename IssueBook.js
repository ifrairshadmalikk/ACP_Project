import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function IssueBook() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    bookId: '',
    studentId: '',
    issueDate: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Book issued successfully!');
    navigate('/welcome-page');
  };

  const handleQuit = () => {
    navigate('/welcome-page');
  };

  return (
    <div className="issuebook-container">
      <div className="issuebook-card animate-fade-in">
        <h2>📚 Issue Book</h2>
        <form className="issuebook-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="bookId">Book ID</label>
            <input
              type="text"
              id="bookId"
              name="bookId"
              value={form.bookId}
              onChange={handleChange}
              required
              placeholder="Enter Book ID"
            />
          </div>

          <div className="input-container">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              required
              placeholder="Enter Student ID"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-issue">Issue Book</button>
            <button type="button" className="btn-quit1" onClick={handleQuit}>Quit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IssueBook;
