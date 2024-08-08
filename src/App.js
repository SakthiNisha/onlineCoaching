import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
 
function App(){
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );

}

export default App;

