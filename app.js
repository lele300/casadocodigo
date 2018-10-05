const express = require('express');

const app = express(); //Retorna um objeto que contém a API do Express, responsável pelas requisições HTTP e etc.

// .get("url",callback) trata requisições que usam o method HTTP GET
app.get("/produtos", function(res,resp){
    resp.send("<html><body><h1>Listando produtos</h1></body></html>");
});

// listen(porta, fn callback)
app.listen(3000, function(){
    console.log('Servidor rodando...');
});
