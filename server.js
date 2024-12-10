const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3001;

// Middleware para CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware para interpretar JSON e formulários
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware de logging para todas as requisições
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

// Rotas da API Mockada
app.use("/apiMock", apiRoutes);

// Tratamento para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada no mock server" });
});

// Inicia o servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor mock rodando em http://0.0.0.0:${PORT}`);
});
