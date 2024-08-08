// src/components/Carousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'; // Import the CSS file

const TechCoachingCarousel = () => {
  const carouselItems = [
    {
        src: process.env.PUBLIC_URL + '/images/slider_background.jpg',
        title: 'Comprehensive Courses in Python, React, Node, MongoDB, and JavaScript',
        description: 'Unlock your potential with our comprehensive courses in todays most sought-after technologies. Our curriculum is designed to provide a deep understanding of'
    },
    {
      src: process.env.PUBLIC_URL + '/images/interactive-live-online-classes.jpeg',
      title: 'Interactive Live Classes',
      description: 'Join our interactive live classes to learn Python, React, and Node from industry experts in real-time. Engage with instructors, ask questions, and collaborate with peers in a dynamic virtual classroom environment. Our live sessions provide a hands-on learning experience, ensuring you get the most out of your training. Enroll now and take the first step towards mastering the technologies that power the modern web.'
    },
    {
      src: process.env.PUBLIC_URL + '/images/code-excercise-1.jpeg',
      title: 'Engaging Interactive Coding Exercises',
      description: 'Boost your learning with our engaging interactive coding exercises. Designed to provide hands-on experience, these exercises allow you to practice and apply concepts in real-time. Whether you are learning Python, React, or Node, our coding challenges will help you build confidence and proficiency. Immediate feedback and detailed solutions ensure you understand every step. Dive in and transform your coding skills through practical, interactive exercises tailored to your learning pace.'
    }
    
  ];

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3 className="carousel-title">{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TechCoachingCarousel;
