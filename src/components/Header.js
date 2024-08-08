// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-white bg-warning">
        <Link className="navbar-brand header-brand-name" to="/">My Website</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link header-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
