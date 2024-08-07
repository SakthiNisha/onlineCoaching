// src/pages/Home.js
import React from 'react';
import TechCoachingCarousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <h1 className="mb-4">Home Page</h1>
      <p>Welcome to our online tech coaching website!</p>
      <TechCoachingCarousel />
    </div>
  );
};

export default Home;
