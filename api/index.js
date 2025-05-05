const express = require("express");
const cors = require("cors");
const app = express();

// Настройка CORS
app.use(
  cors({
    origin: true, // Разрешаем любой origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// Middleware для обработки JSON
app.use(express.json());

// Явная обработка OPTIONS для preflight-запросов
app.options("*", cors()); // Используем cors middleware для OPTIONS

// Root route
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// API route
app.post("/api", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received form data:", { name, email, message });
  const responseMessage = `Спасибо за ваш интерес, ${name}`;
  res.json({ message: responseMessage });
});


// Export the Express API
module.exports = app;