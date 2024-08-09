// src/pages/Contact.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);

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

    // Reset the form fields to initial state
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Show the modal upon form submission
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="contact-container">
      <div className="container mt-4">
        <h1 className="mb-4">Contact Us</h1>
        <p className="contact-description">
          We’d love to hear from you! Whether you’re curious about our courses, need assistance, or just want to share your thoughts, our team is here to help. At Sparkle Technology, we are committed to providing excellent support and answering any questions you may have. Please fill out the form below, and a member of our team will reach out to you shortly.
        </p>
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
             {/* <li><strong>Address:</strong> 123 Tech Street, Tech City</li>*/}
              <li><strong>Phone/WhatsApp:</strong> +91 9600836479</li>
              <li><strong>Email:</strong> snsntechno@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully submitted the form. We will reach out to you soon!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
