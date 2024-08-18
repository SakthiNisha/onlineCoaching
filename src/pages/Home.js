// src/pages/Home.js
import React from 'react';
import TechCoachingCarousel from '../components/Carousel';
import './Home.css'; // Import CSS for Home page styling

const Home = () => {
  return (
    <div>
      <TechCoachingCarousel />
      <section className="introduction-section">
        <div className="container">
          <h2 className="introduction-title">Welcome to Career Bloom Technologies</h2>
          <p className="introduction-text">
            At SCareer Bloom Technologies, we are committed to providing high-quality, industry-relevant training in the latest technologies. Our mission is to empower individuals and businesses to succeed in today’s competitive digital landscape. With over a decade of experience in the IT industry, we offer comprehensive courses in Python, React, Node.js, MongoDB, JavaScript, and more. Whether you’re a beginner looking to start your tech career or a professional seeking to upgrade your skills, Sparkle Technology is your gateway to success.
          </p>
          <p className="introduction-text">
            Our expert instructors bring real-world experience to the classroom, offering hands-on learning that bridges the gap between theory and practice. Join us at Sparkle Technology to unlock your potential, master cutting-edge technologies, and accelerate your career growth. Let’s embark on a journey of knowledge, innovation, and excellence together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
