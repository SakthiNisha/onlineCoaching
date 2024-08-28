// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import AzureSyllabus from './pages/AzureSyllabus';
import EnglishPhrases from './pages/EnglishPhrases';
import PhrasesByLetter from './pages/PhrasesByLetter';
import EnglishWords from './pages/EnglishWords';
import WordsByLetter from './pages/WordsByLetter';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/azure-syllabus" element={<AzureSyllabus />} />
            <Route path="/english-phrases" element={<EnglishPhrases />}>
              <Route path=":letter" element={<PhrasesByLetter />} /> {/* Display phrases by selected letter */}
            </Route>
            <Route path="/english-words" element={<EnglishWords />}>
              <Route path=":letter" element={<WordsByLetter />} /> {/* Display words by selected letter */}
            </Route>
          </Routes>
        </main>
        <Footer />
        <a 
          href="https://wa.me/919600836479" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </Router>
  );
}

export default App;
