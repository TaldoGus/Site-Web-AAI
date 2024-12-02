const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
// Configurar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Usar o middleware do CORS para permitir requisições de diferentes origens
app.use(cors());// Isso permite requisições de qualquer origem. Você pode configurar mais especificamente se necessário.
app.use(bodyParser.json());
//Rota p enviar feedback
app.post('/send-feedback', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    //CONFIG transport do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',//usa o serviço que achar melhor (gmail,outlook...)
      auth: {
        user: process.env.EMAIL_USER,//Meu e-mail
        pass: process.env.EMAIL_PASS,//Senha do app password gerada nas config do gmail
      },
    });
//configurar o email
    const mailOptions = {
      from: email,//remetente
      to: process.env.RECIPIENT_EMAIL,
      subject: `Feedback de ${name}`,//email q receverá o feedback
      html: message, // Agora o corpo do e-mail é HTML
    };
//Enviar o e-mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Feedback enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar feedback:', error.message);//Loga mensagem de erro
    console.error(error.stack);//Loga a pilha de  chamadas p obter mais detalhes sobre o erro
    res.status(500).json({ error: 'Erro ao enviar o feedback. Tente novamente mais tarde.' });
  }
});
//start o server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
