const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

// Servir arquivos estáticos
app.use(express.static("public"));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API CEP
app.get("/api/cep/:cep", async (req, res) => {
  try {
    const { cep } = req.params;

    const response = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar CEP" });
  }
});

module.exports = app;