// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sport from './components/Sport';
import DetailNews from './components/DetailNews';
import Navbar from './components/Navbar';
import Politics from './components/Politics';
import Technology from './components/Technology';
import Business from './components/Business';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/business" element={<Business/>} />
        <Route path="/detail/:id" element={<DetailNews />} />
        
      </Routes>
    </Router>
  );
};

export default App;