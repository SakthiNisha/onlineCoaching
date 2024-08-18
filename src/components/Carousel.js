// src/components/Carousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'; // Import the CSS file

const TechCoachingCarousel = () => {
  const carouselItems = [
    {
        src: process.env.PUBLIC_URL + '/images/Courses.jpg',
        
    },
    {
      src: process.env.PUBLIC_URL + '/images/dataScience.jpg',
      
    },
    {
      src: process.env.PUBLIC_URL + '/images/payment.jpg',
      
    }
    
  ];

  return (
    <div className='carousel-custom-style'>
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
    </div>
  );
};

export default TechCoachingCarousel;
