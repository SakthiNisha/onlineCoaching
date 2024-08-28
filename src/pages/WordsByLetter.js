// src/pages/WordsByLetter.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EnglishWords.css'; // Reuse the same CSS file for styling

const WordsByLetter = () => {
  const { letter } = useParams();
  const [activeTab, setActiveTab] = useState('basic');

  const words = [
    // Words starting with A
    { word: 'Apple', level: 'basic', meaning: 'A fruit', sentence: 'An apple a day keeps the doctor away.' },
    { word: 'Ant', level: 'basic', meaning: 'A small insect', sentence: 'The ant is very hardworking.' },
    { word: 'Arm', level: 'intermediate', meaning: 'A limb of the body', sentence: 'He raised his arm to ask a question.' },
    { word: 'Adventure', level: 'intermediate', meaning: 'An unusual and exciting experience', sentence: 'Their journey to the mountains was a great adventure.' },
    { word: 'Ambitious', level: 'advanced', meaning: 'Having a strong desire for success', sentence: 'She is an ambitious person who always sets high goals.' },
    { word: 'Anticipate', level: 'advanced', meaning: 'To expect or predict', sentence: 'We anticipate a significant change in the market trends.' },

    // Words starting with B
    { word: 'Ball', level: 'basic', meaning: 'A round object used in games', sentence: 'He threw the ball to his friend.' },
    { word: 'Bat', level: 'basic', meaning: 'A piece of equipment used to hit the ball in sports like cricket or baseball', sentence: 'He hit the ball with the bat.' },
    { word: 'Bag', level: 'basic', meaning: 'A container made of flexible material with an opening at the top', sentence: 'She carried her books in a bag.' },
    { word: 'Battle', level: 'intermediate', meaning: 'A fight between armed forces', sentence: 'The battle lasted for several hours.' },
    { word: 'Benevolent', level: 'intermediate', meaning: 'Well-meaning and kindly', sentence: 'The benevolent leader was loved by everyone in the community.' },
    { word: 'Bewildered', level: 'advanced', meaning: 'Confused and puzzled', sentence: 'She was bewildered by the complexity of the instructions.' },
    { word: 'Boisterous', level: 'advanced', meaning: 'Noisy, energetic, and cheerful', sentence: 'The crowd was boisterous during the concert.' },
  ];

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
