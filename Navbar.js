import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">📚 BookSys</div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/welcome-page"><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
          <li><Link to="/books"><i className="fas fa-book"></i> Books</Link></li>
          <li><Link to="/add-book"><i className="fas fa-plus-circle"></i> Add</Link></li>
          <li><Link to="/issue-book"><i className="fas fa-book-reader"></i> Issue</Link></li>
        </ul>
        <button className="logout-button" onClick={() => navigate("/")}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
