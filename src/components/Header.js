// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="fixed-top">
      <div className="contact-info">
        <span>Phone / WhatsAPP: +123 456 7890</span>
      </div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <NavLink className="navbar-brand header-brand-name" to="/">
          <img src={process.env.PUBLIC_URL + '/images/sparkle.jpg'} alt="Logo" className="header-logo" />
          </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link header-link" exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/courses" activeClassName="active">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/about-us" activeClassName="active">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/contact" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
