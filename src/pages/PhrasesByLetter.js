// src/pages/PhrasesByLetter.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EnglishPhrases.css';

const PhrasesByLetter = () => {
  const { letter } = useParams();
  const [activeTab, setActiveTab] = useState('basic');

  const phrases = [
    // Phrases starting with A
    { phrase: 'A blessing in disguise', level: 'basic', meaning: 'A good thing that seemed bad at first' },
    { phrase: 'A dime a dozen', level: 'intermediate', meaning: 'Something common and not valuable' },
    { phrase: 'A piece of cake', level: 'advanced', meaning: 'Something very easy to do' },

    // Phrases starting with B
    { phrase: 'Back to the drawing board', level: 'basic', meaning: 'Start over' },
    { phrase: 'Bite the bullet', level: 'intermediate', meaning: 'To get something over with because it is inevitable' },
    { phrase: 'Break the ice', level: 'advanced', meaning: 'To make people feel more comfortable' },
  ];

  const filteredPhrases = phrases.filter(phrase => phrase.phrase[0].toUpperCase() === letter.toUpperCase() && phrase.level === activeTab);

  return (
    <div className="english-phrases-container">
      <h1>Phrases Starting with "{letter.toUpperCase()}"</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('basic')} className={activeTab === 'basic' ? 'active' : ''}>Basic</button>
        <button onClick={() => setActiveTab('intermediate')} className={activeTab === 'intermediate' ? 'active' : ''}>Intermediate</button>
        <button onClick={() => setActiveTab('advanced')} className={activeTab === 'advanced' ? 'active' : ''}>Advanced</button>
      </div>
      <table className="phrases-table">
        <thead>
          <tr>
            <th>Phrase</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {filteredPhrases.map((item, index) => (
            <tr key={index}>
              <td>{item.phrase}</td>
              <td>{item.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredPhrases.length === 0 && <p>No phrases available for this level.</p>}
    </div>
  );
};

export default PhrasesByLetter;
