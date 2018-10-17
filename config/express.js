const express = require('express');
const load = require("express-load");
const bodyParse = require("body-parser"); // Extrai os dados do corpo da requisição e joga na propriedade req.body
const expressValidator = require("express-validator"); // Utilizado para validações

module.exports = () => {
    const app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    // Todo arquivo que estiver na pasta app/public é estático e não precisa de uma rota específica para ser carregada
    app.use(express.static("./app/public"))
    // Form por padrão organiza os valores do form no padrão urlencoded.
    app.use(bodyParse.urlencoded({extended : true})); // .use() recebe funções que serão aplicadas ao request.
    // extended : true quer dizer pode entender forms mais complexos
    app.use(bodyParse.json()); // pode usar o formato JSON para envio de dados.
    
    app.use(expressValidator()); //Adiciona algumas funções na classe Request para validações de dados.

    load("routes", {cwd: 'app'}) // Carrega os módulos da pasta "routes" somente da pasta 'app' auto.
        .then("infra") // Carrega os módulos da pasta "infra" auto.
        .into(app); // Coloca os módulos carregados dentro do objeto do express.

    app.use((req, resp, next) => {
        resp.status(404).render("erros/404")
        next(); //Avança para o próximo fluxo do Express
    });

    app.use(function(error,req,res,next){
        if(process.env.NODE_ENV == 'production') {
            res.status(500).render('erros/500');
            return;
        }
        next(error);
    });

    return app; // Retonar a variável do express já configurada em forma de função.
};