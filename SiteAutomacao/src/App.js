
import React from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <div className="App">
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
      <FeedbackForm />
    </div>
  );
}

export default App;

