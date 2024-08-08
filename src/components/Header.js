// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-white bg-warning">
        <NavLink className="navbar-brand header-brand-name" to="/">My Website</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/courses">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/about-us">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
