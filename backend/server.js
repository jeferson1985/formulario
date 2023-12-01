const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Rota raiz
app.get("/", (req, res) => {
  res.send("Servidor Node.js está funcionando!");
});

// Defina suas rotas aqui
app.post("/enviar-email", (req, res) => {
  const { nome, email, telefone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8d4de94608e0e6",
      pass: "f11a714fd16941",
    },
  });

  const mailOptions = {
    from: "jeffersonribeirojesus85@gmail.com",
    to: "refej@hotmail.com",
    subject: "Dados de Coleta",
    text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`,
    html: `<h1>Dados do Cliente:\n${nome}\n${email}\n${telefone}</h1>`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar o email:", error);
      res.status(500).send("Erro ao enviar o email");
    } else {
      console.log("Email enviado:", info.response);
      res.status(200).send("Email enviado com sucesso!");
    }
  });

  // Aqui você pode processar os dados como enviar um e-mail, salvar em um banco de dados, etc.

  console.log(
    `Dados recebidos: Nome - ${nome}, Email - ${email}, Telefone - ${telefone}`
  );

  res
    .status(200)
    .send(
      `Dados recebidos: Nome - ${nome}, Email - ${email}, Telefone - ${telefone}`
    );
});

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
