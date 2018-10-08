const connectionFactory = require("../infra/connectionFactory")();

module.exports = (app) => {
    // .get("url",callback) trata requisições que usam o method HTTP GET
    app.get("/produtos", (req, resp) => {


        // Método que faz a query no banco de dados e executa uma função de callback
        // quando o SELECT for efetuado.
        // O primeiro parâmetro da função é o erro e o segundo o retorno da consulta

        connectionFactory.query('select * from livros', function(err, results){
            // Obs: o EJS sempre busca os arquivos numa pasta default "views" na raiz do app
            //.render() por parâmetro a view que será renderizada e o objeto com a chave que será 
            // acessada na view.
            resp.render("produtos/lista", {lista: results});
        });

        connectionFactory.end();
    });
}
