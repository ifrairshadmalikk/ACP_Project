import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    bookId: '',
    title: '',
    author: '',
    status: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save the new book in localStorage
    const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
    existingBooks.push(form);
    localStorage.setItem('books', JSON.stringify(existingBooks));

    alert('Book Added Successfully!');
    navigate('/welcome-page'); // Go back to the welcome page
  };

  const handleQuit = () => {
    navigate('/welcome-page'); // Go back to the welcome page
  };

  return (
    <div className="addbook-container">
      <div className="addbook-header">
        <h2>Add Books</h2>
      </div>

      <form className="addbook-form" onSubmit={handleSubmit}>
        <label>Book ID :</label>
        <input
          type="text"
          name="bookId"
          value={form.bookId}
          onChange={handleChange}
          required
        />

        <label>Title :</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label>Author :</label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          required
        />

        <label>Status (Avail/issued) :</label>
        <input
          type="text"
          name="status"
          value={form.status}
          onChange={handleChange}
          required
        />

        <div className="button-group">
          <button type="submit">SUBMIT</button>
          <button type="button" onClick={handleQuit}>Quit</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
