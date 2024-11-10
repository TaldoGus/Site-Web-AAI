import React, { useState } from 'react';
import './ModuleLamp.css';

const ModuleLamp = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleAnswerClick = (isCorrect) => {
    setSelectedOption(isCorrect);
  };

  return (
    <div className="module-lamp-container">
      <header>
        <nav>
          {/* Navbar - pode ser herdada de um componente pai */}
        </nav>
      </header>

      <main>
        <section className="module-content">
          <div className="card">
            <h2>Configuração de Lâmpadas Inteligentes</h2>
            <p>...</p>
            <img src="imagem1.jpg" alt="Configuração de Lâmpadas Inteligentes" />
            <video controls>
              <source src="video1.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="quiz">
          <h2>Quiz</h2>
          <div className="question">
            <p>Qual é o primeiro passo para configurar sua lâmpada inteligente?</p>
            <div className="options">
              <button
                className={`option ${selectedOption === false ? 'incorrect' : ''}`}
                onClick={() => handleAnswerClick(false)}
              >
                Opção A
              </button>
              <button
                className={`option ${selectedOption === true ? 'correct' : ''}`}
                onClick={() => handleAnswerClick(true)}
              >
                Opção B
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModuleLamp;
