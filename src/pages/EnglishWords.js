// src/pages/EnglishWords.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation, Outlet, Link } from 'react-router-dom';
import './EnglishWords.css'; // Import the CSS file for styling

const EnglishWords = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect to "A" if the user is on "/english-words" exactly
    if (location.pathname === '/english-words') {
      navigate('/english-words/A');
    }
  }, [navigate, location.pathname]);

  return (
    <div className="english-words-container">
      <div className="alphabet-nav">
        {letters.map(letter => (
          <Link key={letter} to={`/english-words/${letter}`} className="alphabet-link">
            {letter}
          </Link>
        ))}
      </div>
      <Outlet /> {/* Render the selected letter's words here */}
    </div>
  );
};

export default EnglishWords;
