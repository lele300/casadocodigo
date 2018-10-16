const express = require("../config/express")();
const request = require("supertest")(express); //Lib de testes | Passando as configs do servidor Express
const DataBaseCleaner = require("database-cleaner"); // Lib para limpar o banco de dados do teste
describe("#ProdutosController", () => {
    //Antes de cada teste ser executado, ele limpa o banco de dados.
    beforeEach(done => {
        const dbCleaner = new DataBaseCleaner("mysql");
        dbCleaner.clean(express.infra.connectionFactory(), () => {
            done();
        });
    });

    it("#Listagem JSON", done => {
        request.get("/produtos") // Faz uma requisição para "/produtos"
            .set("Accept", "application/json") // Seta a resposta como application/json
            .expect("Content-Type", /json/) // O conteúdo do request tem que ter JSON. Usado por Regex
            .expect(200, done);// O status da requisição for 200 e a função done() é usada para que 
        // a próxima instrução só seja executada quando o callback for completamente executado.
    });

    it("#Cadastro de Produtos com dados inválidos", done => {
        request.post("/produtos")
            .send({ titulo: "", descricao: "Novo Livro" })
            .expect(400, done);
    });

    it("#Cadastro de Produtos com dados válidos", done => {
        request.post("/produtos")
            .send({ titulo: "Livro Nodee.JS", descricao: "Novo Livro", preco: "20.40" })
            .expect(302, done);
    });

    it("#Cadastro de Produtos com retorno em HTML", done => {
        request.post("/produtos")
            .send({ titulo: "Livro Nodee.JS", descricao: "Novo Livro", preco: "20.40" })
            .set("Accept", "text/html")
            .expect("Content-Type", /html/)
            .expect(302, done);
    });
});