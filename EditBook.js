import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditBook() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    bookId: '',
    title: '',
    author: '',
    status: '',
  });

  const [bookFound, setBookFound] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const foundBook = books.find((book) => book.bookId === form.bookId);

    if (foundBook) {
      setForm(foundBook);
      setBookFound(true);
      setError('');
    } else {
      setError('Book not found');
      setBookFound(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = JSON.parse(localStorage.getItem('books')) || [];

    const updatedBooks = books.map((book) =>
      book.bookId === form.bookId ? { ...book, ...form } : book
    );

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    alert('Book details updated successfully!');
    navigate('/welcome-page');
  };

  const handleQuit = () => {
    navigate('/welcome-page');
  };

  return (
    <div className="editbook-container">
      <h2 className="editbook-heading">Edit Book</h2>
      {!bookFound ? (
        <form onSubmit={handleSearch} className="editbook-form">
          <div className="input-container">
            <label htmlFor="bookId">Book ID:</label>
            <input
              type="text"
              id="bookId"
              name="bookId"
              value={form.bookId}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Search Book</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="editbook-form">
          <div className="input-container">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="status">Status (Avail/Issued):</label>
            <input
              type="text"
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-primary">Update Book</button>
            <button type="button" className="btn-quit" onClick={handleQuit}>Quit</button>
          </div>
        </form>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default EditBook;
