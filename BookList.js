import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  return (
    <div className="viewbooks-container">
      <div className="viewbooks-header">
        <h2>📚 View Books</h2>
      </div>

      <div className="viewbooks-table-wrapper animate-fade-in">
        <table className="viewbooks-table">
          <thead>
            <tr>
              <th>BID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book, idx) => (
                <tr key={idx}>
                  <td>{book.bookId}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-books-msg">
                  😕 No books available. Please add some!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="button-group">
        <button onClick={() => navigate('/welcome-page')}>Quit</button>
      </div>
    </div>
  );
}

export default BookList;
