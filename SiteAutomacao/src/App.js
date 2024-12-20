import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usando Routes em vez de Switch
import FeedbackForm from './components/FeedbackForm';
import Home from './components/Home'; // Importando a página Home
import ModuleLamp from './components/ModuleLamp'; // Importando módulo de lâmpada
import Footer from './components/Footer'; // Importando o rodapé

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar estará disponível em todas as páginas */}
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">
              <img src="logo.png" alt="Logo" />
              <span>HomeSphere Automation</span>
            </div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/faq">FAQ-Dúvidas</a></li>
              <li><a href="/feedback">Feedback</a></li>
            </ul>
            <div className="user-profile">
              <span>Usuário</span>
            </div>
          </nav>
        </header>

        {/* Configuração das rotas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página Home */}
          <Route path="/faq" element={<FeedbackForm />} /> {/* Página FAQ */}
          <Route path="/feedback" element={<FeedbackForm />} /> {/* Página Feedback */}
          <Route path="/module-lamp" element={<ModuleLamp />} /> {/* Página Módulo Lamp */}
        </Routes>

        {/* O rodapé estará presente em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
