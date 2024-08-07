// src/components/Carousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'; // Import the CSS file

const TechCoachingCarousel = () => {
  const carouselItems = [
    {
      src: process.env.PUBLIC_URL + '/images/slider_background.jpg',
      title: 'Tech Coaching 1',
      description: 'Learn the basics of programming with our expert coaches.'
    },
    {
      src: process.env.PUBLIC_URL + '/images/slider_background.jpg',
      title: 'Tech Coaching 2',
      description: 'Advanced programming techniques and best practices.'
    },
    {
      src: process.env.PUBLIC_URL + '/images/slider_background.jpg',
      title: 'Tech Coaching 3',
      description: 'Mastering data structures and algorithms.'
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
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TechCoachingCarousel;
