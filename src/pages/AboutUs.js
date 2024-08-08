// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    
        const backgroundImageStyle = {
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/courses_background.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingTop: '56px', // Height of the fixed header
          height: '330px' // Ensure the background covers the whole viewport
        };
      

  return (
    <>
    <div style={backgroundImageStyle}> 
        </div>
    <div className="about-us-container">
      <div className="container mt-4">
        <h1 className="mb-4">About Us</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h2>Welcome to Our Technology Coaching Center</h2>
                <p>
                  With over 14 years of experience in the software IT industry, we are a team of dedicated professionals committed to empowering individuals through technology education. Our coaching center specializes in providing top-notch training, development, and mentoring services to help you excel in your tech career.
                </p>
                <h3>Our Mission</h3>
                <p>
                  Our mission is to bridge the gap between industry demands and individual skills. We strive to equip our students with the knowledge and practical skills needed to thrive in the ever-evolving tech landscape.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                  <li><strong>Experienced Instructors:</strong> Learn from industry experts with years of hands-on experience in design, development, and technology training.</li>
                  <li><strong>Comprehensive Curriculum:</strong> Our courses cover a wide range of topics including Python, React, NodeJs, MongoDB, MySQL, PHP, Azure Cloud, HTML, CSS, and JavaScript.</li>
                  <li><strong>Hands-On Learning:</strong> Gain practical experience through real-world projects and interactive sessions.</li>
                  <li><strong>Personalized Mentoring:</strong> Receive one-on-one guidance and mentorship to help you achieve your career goals.</li>
                  <li><strong>Flexible Learning:</strong> Choose from a variety of learning modes, including online and in-person classes, to fit your schedule.</li>
                </ul>
                <h3>Our Expertise</h3>
                <p>
                  Our coaching center is built on a foundation of extensive industry experience. We specialize in:
                </p>
                <ul>
                  <li><strong>Design:</strong> Creating intuitive and user-friendly interfaces.</li>
                  <li><strong>Development:</strong> Building robust and scalable software solutions.</li>
                  <li><strong>Training:</strong> Delivering in-depth courses and workshops to enhance your skills.</li>
                  <li><strong>Mentoring:</strong> Providing career guidance and support to help you succeed.</li>
                </ul>
                <p>
                  Join us at our Technology Coaching Center and take the next step in your tech career. Whether you are a beginner looking to start your journey or a professional seeking to advance your skills, we have the right course for you.
                </p>
                <p>
                  Let’s embark on this learning journey together. Your success is our commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
