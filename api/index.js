const express = require("express")
const cors = require("cors")
const app = express()

// Middleware
app.use(express.json())
app.use(cors({ origin: "*" }))

// Root route
app.get("/", (req, res) => res.send("Express on Vercel"))

// API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" })
})

// Contact form route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body
  console.log("Received form data:", { name, email, message })
  const responseMessage = `Спасибо за ваш интерес, ${name}`
  res.json({ message: responseMessage })
})

// Export the Express API
module.exports = app