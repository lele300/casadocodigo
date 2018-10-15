const express = require("../config/express")();
const request = require("supertest")(express); //Lib de testes | Passando as configs do servidor Express
describe("#ProdutosController", () => {
    it("#Listagem JSON", done => {
        request.get("/produtos") // Faz uma requisição para "/produtos"
            .set("Accept","application/json") // Seta a resposta como application/json
            .expect("Content-Type",/json/) // O conteúdo do request tem que ter JSON. Usado por Regex
            .expect(200,done);// O status da requisição for 200 e a função done é usada para que 
            // a próxima instrução só seja executada quando o callback for completamente executado.
    });
});