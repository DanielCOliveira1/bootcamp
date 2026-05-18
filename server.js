const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

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

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;