const express = require('express');
const load = require("express-load");
const bodyParse = require("body-parser");

module.exports =  () => {
    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Form por padrão organiza os valores do form no padrão urlencoded.
    app.use(bodyParse.urlencoded()); // .use() recebe funções que serão aplicadas ao request.

    load("routes", {cwd: 'app'}) // Carrega os módulos da pasta "routes" somente da pasta 'app' auto.
        .then("infra") // Carrega os módulos da pasta "infra" auto.
        .into(app); // Coloca os módulos carregados dentro do objeto do express.

    return app; // Retonar a variável do express já configurada em forma de função.
};