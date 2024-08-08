// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/courses" className="text-white">Courses</Link></li>
              <li><Link to="/about-us" className="text-white">About Us</Link></li>
              <li><Link to="/testimonials" className="text-white">Testimonials</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Tech Street, Tech City</li>
              <li>Phone: +123 456 7890</li>
              <li>Email: techcoaching@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">LinkedIn</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} Tech Coaching Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
