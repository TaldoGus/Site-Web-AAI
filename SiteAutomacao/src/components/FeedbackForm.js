import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui será feita a integração com o backend futuramente
    console.log('Feedback enviado:', feedback);
    setFeedback('');
  };

  return (
    <div className="feedback-container">
      <h1>FEEDBACK</h1>
      <p>Queremos saber sua opinião/Feedback!</p>
      <div className="feedback-box">
        <p>
          Escreva sua resposta, se baseando nesses questionamentos:
          <br />
          "Como foi sua experiência configurando nossos produtos?"<br />
          "O que achou da facilidade de uso dos nossos produtos?"<br />
          "Você encontrou alguma dificuldade durante a configuração? Nos conte como podemos melhorar."<br />
          "O conteúdo do curso foi claro e útil para você? Deixe suas sugestões!"<br />
          "Quais melhorias você sugeriria para este curso ou para nossos produtos?"
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Escreva sua resposta"
            rows="6"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
