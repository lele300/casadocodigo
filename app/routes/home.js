module.exports = (app) => {
    app.get("/", (res, resp, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista((erros, resultados) => {
            if (erros) {
                return next(erros);
            }
            // .format() recebe um objeto com as configs para fazer o retorno da requisição de acordo com o Accept
            resp.format({
                html: () => { //Se o Accept for text/html, devolve o arquivo lista.ejs (HTML dinâmico)
                    resp.render("home/index", { livros: resultados });
                },
                json: () => { //Se o Accept for application/json, devolve o resultados somente em JSON.
                    resp.json(resultados);
                }
            });
        });
    });
}