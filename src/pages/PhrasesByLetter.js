// src/pages/PhrasesByLetter.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { phrases } from '../data/phrasesData'; // Import the phrases data
import './EnglishPhrases.css'; // Reuse the same CSS file for styling

const PhrasesByLetter = () => {
  const { letter } = useParams();
  const [activeTab, setActiveTab] = useState('basic');

  const filteredPhrases = phrases.filter(
    phrase => phrase.phrase[0].toUpperCase() === letter.toUpperCase() && phrase.level === activeTab
  );

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
            <th>Example Sentence</th>
          </tr>
        </thead>
        <tbody>
          {filteredPhrases.map((item, index) => (
            <tr key={index}>
              <td>{item.phrase}</td>
              <td>{item.meaning}</td>
              <td>{item.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredPhrases.length === 0 && <p>No phrases available for this level.</p>}
    </div>
  );
};

export default PhrasesByLetter;
