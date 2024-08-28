// src/pages/AzureSyllabus.js
import React from 'react';
import './AzureSyllabus.css'; // Import the CSS file for styling

const AzureSyllabus = () => {
  const syllabusItems = [
    'Implement Azure App Service web apps',
    'Implement Azure Functions',
    'Develop solutions that use Blob storage',
    'Develop solutions that use Azure Cosmos DB',
    'Implement containerized solutions',
    'Implement user authentication and authorization',
    'Implement secure Azure solutions',
    'Implement API Management',
    'Develop event-based solutions',
    'Develop message-based solutions',
    'Troubleshoot solutions by using Application Insights',
    'Implement caching for solutions'
  ];

  return (
    <div className="azure-syllabus-container">
      <h1>Azure Syllabus</h1>
      <ul className="syllabus-list">
        {syllabusItems.map((item, index) => (
          <li key={index} className="syllabus-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AzureSyllabus;
