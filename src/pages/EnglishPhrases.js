// src/pages/EnglishPhrases.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation, Outlet, Link } from 'react-router-dom';
import './EnglishPhrases.css';

const EnglishPhrases = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to the "A" page when the component loads
    if (location.pathname === '/english-phrases') {
    navigate('/english-phrases/A');
    }
  }, [navigate, location.pathname]);

  
  return (
    <div className="english-phrases-container">
      <div className="alphabet-nav">
        {letters.map(letter => (
          <Link key={letter} to={`/english-phrases/${letter}`} className="alphabet-link">
            {letter}
          </Link>
        ))}
      </div>
      <Outlet /> {/* Render the selected letter's phrases here */}
    </div>
  );
};

export default EnglishPhrases;
