// src/pages/WordsByLetter.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { words } from '../data/wordsData'
import './EnglishWords.css'; // Reuse the same CSS file for styling

const WordsByLetter = () => {
  const { letter } = useParams();
  const [activeTab, setActiveTab] = useState('basic');

  const filteredWords = words.filter(word => word.word[0].toUpperCase() === letter.toUpperCase() && word.level === activeTab);

  return (
    <div className="english-words-container">
      <h1>Words Starting with "{letter.toUpperCase()}"</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('basic')} className={activeTab === 'basic' ? 'active' : ''}>Basic</button>
        <button onClick={() => setActiveTab('intermediate')} className={activeTab === 'intermediate' ? 'active' : ''}>Intermediate</button>
        <button onClick={() => setActiveTab('advanced')} className={activeTab === 'advanced' ? 'active' : ''}>Advanced</button>
      </div>
      <table className="words-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Meaning</th>
            <th>Sentence</th>
          </tr>
        </thead>
        <tbody>
          {filteredWords.map((item, index) => (
            <tr key={index}>
              <td>{item.word}</td>
              <td>{item.meaning}</td>
              <td>{item.sentence}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredWords.length === 0 && <p>No words available for this level.</p>}
    </div>
  );
};

export default WordsByLetter;
