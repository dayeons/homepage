import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './Layout'

function App() {
  return (
    <Routes path="/" element={<Layout />}>
      <Route>
        
      </Route>
    </Routes>
  );
}

export default App;
