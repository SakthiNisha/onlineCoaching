// src/pages/Courses.js
import React from 'react';
import './Courses.css'; // Import the CSS file

const courses = [
  {
    title: 'Python',
    description: 'Learn the Python programming with frameworks.',
    image: process.env.PUBLIC_URL + '/images/python.jpg',
    link: '/courses/python'
  },
  {
    title: 'React',
    description: 'Learn how to build React applications.',
    image: process.env.PUBLIC_URL + '/images/react.jpg',
    link: '/courses/react'
  },
  {
    title: 'Data Science',
    description: 'Learn the power of Data Science.',
    image: process.env.PUBLIC_URL + '/images/dataSceinceCourse.jpg',
    link: '/courses/Data Science'
  },
  {
    title: 'NodeJs',
    description: 'Learn server-side development with NodeJs.',
    image: process.env.PUBLIC_URL + '/images/node.jpg',
    link: '/courses/nodejs'
  },
  {
    title: 'MongoDB',
    description: 'Learn NoSQL database development with MongoDB.',
    image: process.env.PUBLIC_URL + '/images/mongodb.png',
    link: '/courses/mongodb'
  },
  {
    title: 'Azure Cloud',
    description: 'Learn cloud computing with Azure.',
    image: process.env.PUBLIC_URL + '/images/azure.png',
    link: '/courses/azure'
  },
  {
    title: 'PHP',
    description: 'Learn server-side development with PHP.',
    image: process.env.PUBLIC_URL + '/images/php.png',
    link: '/courses/php'
  },
  {
    title: 'Mysql',
    description: 'Learn SQL database development with Mysql.',
    image: process.env.PUBLIC_URL + '/images/mysql.jpg',
    link: '/courses/mysql'
  },
  {
    title: 'JavaScript',
    description: 'Learn the fundamentals and advanced concept of JavaScript.',
    image: process.env.PUBLIC_URL + '/images/javascript.jpg',
    link: '/courses/javascript'
  },
  {
    title: 'HTML',
    description: 'Learn the web page creation with HTML.',
    image: process.env.PUBLIC_URL + '/images/html.jpg',
    link: '/courses/html'
  },
  {
    title: 'CSS',
    description: 'Learn how to style web pages with CSS.',
    image: process.env.PUBLIC_URL + '/images/css.jpg',
    link: '/courses/css'
  },
];

const Courses = () => {
    //const handleViewMoreClick = (e) => {
      //  e.preventDefault(); // Prevent the default link behavior
        // You can add any other action here, like displaying a modal or an alert
        
     // };

  return (
      <div className="container courses-content mt-4">
        <h1 className="mb-4">Our Courses</h1>
        <p className="courses-description">
          At Career Bloom Technologies, we offer a diverse range of courses tailored to equip you with the skills needed to thrive in today's tech-driven world. Whether you're a student stepping into the tech industry or a fresher looking to enhance your expertise, our courses are designed with you in mind. From mastering the fundamentals of programming to delving into advanced frameworks and cloud technologies, our curriculum is both comprehensive and practical. Join us and start your journey towards becoming a tech professional who stands out in the competitive job market.
        </p>
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <a href="#/contact" className="btn btn-warning">View More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Courses;
