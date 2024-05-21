import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AboutPage from './pages/AboutPage';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/AboutPage" element={<AboutPage />}/>
        <Route path="/Projects" element={<Projects />} />

      </Route>
    </Routes>
  );
}

export default App;
