import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteBook() {
  const [bookId, setBookId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookId(e.target.value);
    setError('');
  };

  const handleDelete = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = books.filter(book => book.bookId !== bookId);

    if (updatedBooks.length === books.length) {
      setError('❌ Book not found!');
    } else {
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      alert('✅ Book Deleted Successfully!');
      navigate('/welcome-page');
    }
  };

  return (
    <div className="deletebook-container">
      <div className="deletebook-card animate-fade-in">
        <h2>🗑️ Delete Book</h2>
        <label htmlFor="bookId">Enter Book ID</label>
        <input
          type="text"
          name="bookId"
          value={bookId}
          onChange={handleChange}
          placeholder="e.g. B001"
        />
        <button onClick={handleDelete}>Delete Book</button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

export default DeleteBook;
