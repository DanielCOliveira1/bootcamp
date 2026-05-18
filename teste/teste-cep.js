const axios = require("axios");

test("Deve retornar CEP válido do ViaCEP", async () => {
  const response = await axios.get(
    "https://viacep.com.br/ws/01001000/json/"
  );

  expect(response.data.cep).toBe("01001-000");
  expect(response.data.logradouro).toBeDefined();
});