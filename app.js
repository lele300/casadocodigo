// require vai executar o script do arquivo que está no caminho './config/express'
// e vai retornar a função do module.exports
const configExpress = require('./config/express');
const app = configExpress();

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
