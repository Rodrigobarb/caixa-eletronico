import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CaixaEletronico from './CaixaEletronico';
import TelaInicial from './TelaInicial';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<TelaInicial />} />
            <Route path="/caixa" element={<CaixaEletronico />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;