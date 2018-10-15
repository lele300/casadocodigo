const http = require("http");
const assert = require("assert"); //Importando Biblioteca de Testes
describe("#ProdutosController", () => {
    it("#Listagem JSON", done => {
        const configuracoes = {
            hostname: 'localhost',
            port:3000,
            path:'/produtos',
            headers: {
                'Accept' : 'application/json'
            }
        };
        
        http.get(configuracoes, res => {
            // .equal(valorAVerificar,resultadoEsperado);
            assert.equal(res.statusCode, 200);
            assert.equal(res.headers["content-type"], 'application/json; charset=utf-8')
            done(); // Utilizado para executar essa função de callback antes de ir para o próxima instrução
            // Sem essa função, a requisição .get() inicia uma execução assíncrona e parte para o próximo bloco
            // que marca o fim da função it() e sai da função sem ter terminado de executar o http.get().
        });
    });
});