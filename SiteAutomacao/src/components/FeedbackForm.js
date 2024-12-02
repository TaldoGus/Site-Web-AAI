import React, { useState } from 'react';
import './FeedbackForm.css';
import axios from 'axios';// Importando Axios para requisições HTTP

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');// Adicionando estado para o nome
  const [email, setEmail] = useState(''); // Adicionando estado para o email
  const [message, setMessage] = useState('');// Mensagem de sucesso/erro

  const handleSubmit = async (event) => {
    event.preventDefault();
// Verificando se o nome, email e o feedback estão preenchidos
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      setMessage('Por favor, preencha seu nome, email e feedback.');
      return;
    }


 // Criando a estrutura do HTML para enviar com o CSS inline
const feedbackHTML = `
<div style="padding: 20px; text-align: center;">
  <h1 style="font-family: Arial, sans-serif; color: #333;">FEEDBACK</h1>
  <p style="font-family: Arial, sans-serif; color: #333;">Queremos saber sua opinião/Feedback!</p>
  <div style="background-color: #f0ece3; padding: 20px; margin: 20px auto; width: 60%; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <p style="text-align: left; color: #333; font-family: Arial, sans-serif;">
      Escreva sua resposta, se baseando nesses questionamentos:
      <br />
      "Como foi sua experiência configurando nossos produtos?"
      <br />
      "O que achou da facilidade de uso dos nossos produtos?"
      <br />
      "Você encontrou alguma dificuldade durante a configuração? Nos conte como podemos melhorar."
      <br />
      "O conteúdo do curso foi claro e útil para você? Deixe suas sugestões!"
      <br />
      "Quais melhorias você sugeriria para este curso ou para nossos produtos?"
    </p>
    <div style="margin-top: 20px; font-family: Arial, sans-serif;">
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${feedback}</p>
    </div>
  </div>
</div>
`;


    try {
      // Fazendo a solicitação ao backend
      await axios.post('http://localhost:5000/send-feedback', {
        name,
        email,// Enviando o email junto com o nome e feedback
        message: feedbackHTML,  // Enviando o HTML no corpo da mensagem
      });
// Limpa os campos e exibe mensagem de sucesso
      setFeedback('');
      setName('');
      setEmail('');
      setMessage('Feedback enviado com sucesso! Obrigado pela sua contribuição.');
    } catch (error) {
      console.error('Erro ao enviar o feedback:', error);
      setMessage('Houve um erro ao enviar seu feedback. Tente novamente mais tarde.');
    }
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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Escreva sua resposta"
            rows="6"
          />
          <button type="submit">Enviar</button>
        </form>
        {message && <p className="message">{message}</p>}{/* Exibe mensagem de feedback */}
      </div>
    </div>
  );
}

export default FeedbackForm;
