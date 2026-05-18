const axios = require("axios");

test("API ViaCEP deve retornar dados válidos", async () => {
  const response = await axios.get(
    "https://viacep.com.br/ws/01001000/json/"
  );

  expect(response.status).toBe(200);
  expect(response.data.cep).toBe("01001-000");
});