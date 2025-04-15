import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Book Management System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
