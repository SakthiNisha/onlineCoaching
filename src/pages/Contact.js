// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/courses_background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingTop: '56px', // Height of the fixed header
        height: '330px' // Ensure the background covers the whole viewport
    }; 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

  return (
    <>
    <div style={backgroundImageStyle}> 
        </div>
    <div className="contact-container">
      <div className="container mt-4">
        <h1 className="mb-4">Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <ul className="list-unstyled">
              <li><strong>Address:</strong> 123 Tech Street, Tech City</li>
              <li><strong>Phone:</strong> +123 456 7890</li>
              <li><strong>Email:</strong> techcoaching@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
