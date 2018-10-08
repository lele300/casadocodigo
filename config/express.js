const express = require("express");
const load = require("express-load");

module.exports = () => {

    const app = express();
    //.set() serve para definirmos variáveis para dentro do Express que passem por todo o sistema
    app.set("view engine", "ejs");

    // estamos alterando o caminho padrão da pasta views para /app/views
    app.set("views", "./app/views");

    load("routes" , { cwd : "app"})
    .then("infra")
    .into(app);
    return app;
}



