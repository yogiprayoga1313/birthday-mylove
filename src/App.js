import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Opening from './pages/Opening';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Opening />} />
          <Route path="/Home" element={< Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
