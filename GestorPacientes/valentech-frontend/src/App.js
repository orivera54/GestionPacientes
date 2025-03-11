import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Pacientes from './components/Pacientes';
import Seguimientos from './components/Seguimientos';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faUserPlus, faListAlt);

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="sidebar">
          <ul>
            <li><Link to="/pacientes">Pacientes</Link></li>
            <li><Link to="/seguimientos">Seguimientos</Link></li>     
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/seguimientos" element={<Seguimientos />} />          
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
