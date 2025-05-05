const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received form data:', { name, email, message });
  const responseMessage = `Спасибо за ваш интерес, ${name}`;
  res.json({ message: responseMessage });
});


module.exports = app;