const express = require('express');

const app = express(); //Retorna um objeto que contém a API do Express, responsável pelas requisições HTTP e etc.

//.set() serve para definirmos variáveis para dentro do Express que passem por todo o sistema
app.set("view engine", "ejs");

// .get("url",callback) trata requisições que usam o method HTTP GET
app.get("/produtos", function(res,resp){
    //.render(url_arquivo_ejs) renderiza um arquivo de EJS no caminho produtos/lista
    //Obs: o EJS sempre busca os arquivos numa pasta default "views" na raiz do app
    resp.render("produtos/lista");
});

// listen(porta, fn callback)
app.listen(3000, function(){
    console.log('Servidor rodando...');
});
