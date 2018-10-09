//Módulo que carrega as rotas (sendo carregado pelo auto-load em express.js)
module.exports = (app) => {
    app.get("/produtos", (req,resp) => {
        const connection = app.infra.connectionFactory(); //Esse é o caminho que está o arquivo connectionFactory.js que retorna a function createDBConnection().
        const produtosBanco = new app.infra.produtosBanco(connection); //Esse é o caminho que está o arquivo produtosBanco.js que retorna O OBJETO já pronto para uso.
        produtosBanco.lista((erros, resultados) => {
            resp.render("produtos/lista", {lista : resultados});
        });
        connection.end();
    });
}