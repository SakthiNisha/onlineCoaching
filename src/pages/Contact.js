// src/pages/Contact.js
import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs
    .sendForm('service_fgtamyj', 'template_264hj1i', form.current, {
      publicKey: '44XmV4QjbddK0axfN',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        messageRef.current.value = '';
        // Show the modal upon form submission
        setShowModal(true);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
 };

  const handleClose = () => setShowModal(false);

  return (
    <div className="contact-container">
      <div className="container mt-4">
        <h1 className="mb-4">Contact Us</h1>
        <p className="contact-description">
          We’d love to hear from you! Whether you’re curious about our courses, need assistance, or just want to share your thoughts, our team is here to help. At Career Bloom Technologies, we are committed to providing excellent support and answering any questions you may have. Please fill out the form below, and a member of our team will reach out to you shortly.
        </p>
        <div className="row">
          <div className="col-md-6">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text" 
                  ref={nameRef}
                  className="form-control"
                  id="name"
                  name="from_name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="form-control"
                  id="email"
                  name="user_email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  ref={phoneRef}
                  className="form-control"
                  id="phone"
                  name="user_phone"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  ref={messageRef}
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
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
              <li><strong>Email:</strong> careerbloomtechnologies@gmail.com</li>
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
          You have successfully submitted. We will reach out to you soon!
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
