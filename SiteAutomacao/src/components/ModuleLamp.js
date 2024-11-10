import React, { useState } from 'react';
import './ModuleLamp.css';

function ModuleLamp() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    if (!submitted) {
      setSelectedAnswer(answerIndex);
      setSubmitted(true);
    } else {
      // Permite que o usuário altere a resposta
      setSelectedAnswer(answerIndex);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  return (
    <div className="module-lamp-container">
      <h1>Módulo 1 - Lâmpada Inteligente</h1>

      <div className="module-lamp-card">
        <h2>Configuração de Lâmpadas Inteligentes</h2>
        <p>*Aprenda a configurar lâmpadas inteligentes com exemplos práticos*</p>
      </div>

      <div className="module-lamp-card">
        <h2>1ª Etapa - Instalação manual</h2>
        <p>Como instalar a lâmpada, os cuidados ao escolher o produto e os tipos de lâmpadas smart.</p>
      </div>

      <div className="module-lamp-card">
        <h2>2ª Etapa - Ligando e conectando</h2>
        <p>Como ligar e conectar a lâmpada ao smartphone para controlá-la com um app e integrá-la a outros dispositivos.</p>
      </div>

      <div className="module-lamp-card">
        <h2>Configuração de Lâmpadas Inteligentes</h2>
        <p>Entenda como conectar as lâmpadas com o Wi-Fi e como usá-las via comandos de voz.</p>
      </div>

      <div className="quiz-section">
        <h3>Quiz - Teste o que aprendeu</h3>
        <p>1. Qual o primeiro passo para configurar uma lâmpada inteligente?</p>

        <div className="quiz-options">
          {['A', 'B', 'C', 'D'].map((option, index) => (
            <div
              key={index}
              className={`quiz-option ${submitted ? (index === 1 ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleAnswerClick(index)}
            >
              {option}. {index === 0 ? 'Instalar a lâmpada' : index === 1 ? 'Ligar e conectar ao Wi-Fi' : 'Outra opção'}
            </div>
          ))}
        </div>

        {/* Botão para resetar o quiz */}
        <button onClick={resetQuiz}>Refazer Quiz</button>
      </div>
    </div>
  );
}

export default ModuleLamp;
