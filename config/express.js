// Através do arquivo express.js, estamos isolando o código de config do express.
// Node.js existe um padrão de carregamento de módulos no JavaScript chamado CommonJS. 
// O padrão CommonJS, exige que seja disponibilizado a variável module que possui o atributo exports
// Este atributo recebe a função que queremos retornar.

module.exports = () => {
    const express = require("express"); //Retorna uma função não inicializada que contém a API do Express, responsável pelas requisições HTTP e etc.
    
    const app = express(); // const app recebe o objeto que contém as funções do Express

    //.set() serve para definirmos variáveis para dentro do Express que passem por todo o sistema
    app.set("view engine", "ejs");
    return app;
}



