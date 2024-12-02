const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');  // Adicionando o pacote cors

// Configurar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Usar o middleware do CORS para permitir requisições de diferentes origens
app.use(cors());  // Isso permite requisições de qualquer origem. Você pode configurar mais especificamente se necessário.

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Rota para enviar feedback
app.post('/send-feedback', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Configurar transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use o serviço que preferir (Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Senha ou app password
      },
    });

    // Configurar o e-mail
    const mailOptions = {
      from: email, // E-mail do remetente
      to: process.env.RECIPIENT_EMAIL, // E-mail que vai receber o feedback
      subject: `Feedback de ${name}`, // Assunto do e-mail
      text: message, // Conteúdo do e-mail
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Feedback enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar feedback:', error.message); // Loga a mensagem de erro
    console.error(error.stack); // Loga a pilha de chamadas para obter mais detalhes sobre o erro
    res.status(500).json({ error: 'Erro ao enviar o feedback. Tente novamente mais tarde.' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
