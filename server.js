const express = require("express");
const axios = require("axios");

const app = express();

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

// ⚠️ IMPORTANTE PARA VERCEL
module.exports = app;