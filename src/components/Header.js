// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Header.css'; // Import the CSS file

const Header = () => {
  // Function to handle closing the navbar on link click
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <header className="fixed-top">
      <div className="contact-info">
        <a 
          href="https://wa.me/919600836479" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-icon-header"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" /><span className="contact-number">+12345678</span>
        </a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <NavLink className="navbar-brand header-brand-name" to="/">
          <img src={process.env.PUBLIC_URL + '/images/career_bloom_logo2.jpeg'} alt="Logo" className="header-logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link header-link" exact to="/" activeClassName="active" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/courses" activeClassName="active" onClick={handleNavLinkClick}>Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/about-us" activeClassName="active" onClick={handleNavLinkClick}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link header-link" to="/contact" activeClassName="active" onClick={handleNavLinkClick}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
