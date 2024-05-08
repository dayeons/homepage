import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />

      </Route>
    </Routes>
  );
}

export default App;
