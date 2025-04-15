// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';


import Login from './pages/Login';
import Signup from './pages/Signup';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import IssueBook from './pages/IssueBook';
import Deletebook from './pages/Deletebook';
import Wishlist from './pages/Wishlist';

import WelcomeScreen from './pages/WelcomeScreen';
import Welcomepage from './pages/Welcomepage';

function App() {
  return (
    <Router>
      <Routes>
        {/* No layout for the intro screen */}
        <Route path="/" element={<WelcomeScreen />} />

        {/* Routes that include Navbar and Footer */}
        <Route
          path="/welcome-page"
          element={
            <Layout>
              <Welcomepage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/books"
          element={
            <Layout>
              <BookList />
            </Layout>
          }
        />
        <Route
          path="/add-book"
          element={
            <Layout>
              <AddBook />
            </Layout>
          }
        />
        <Route
          path="/edit-book"
          element={
            <Layout>
              <EditBook />
            </Layout>
          }
        />
        <Route
          path="/issue-book"
          element={
            <Layout>
              <IssueBook />
            </Layout>
          }
        />
        <Route
          path="/delete-book"
          element={
            <Layout>
              <Deletebook />
            </Layout>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Layout>
              <Wishlist />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
