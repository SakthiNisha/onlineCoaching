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
              <li><Link to="/privacy-policy" className="text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              {/*<li>Address: 123 Tech Street, Tech City</li>*/}
              <li>Phone/WhatsApp: +91 9600836479</li>
              <li>Email: snsntechno@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white">Facebook</Link></li>
              <li><Link href="#" className="text-white">Twitter</Link></li>
              <li><Link href="#" className="text-white">LinkedIn</Link></li>
              <li><Link href="#" className="text-white">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
        Copyright &copy; {new Date().getFullYear()} Career Bloom Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
