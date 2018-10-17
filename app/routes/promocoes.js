module.exports = app => {
    app.get("/promocoes/form", (req, resp, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista((erros, resultados) => {
            if (erros) {
                return next(erros);
            }
            resp.render("promocoes/form", { lista: resultados });
        });
    });

    app.post("/promocoes", (req, resp) => {
        let promocao = req.body;
        // .get("param") retorna o objeto dentro da variável "io".
        app.get("io").emit("novaPromocao", promocao); //Manda um aviso informando que ocorreu um evento associado ao nome novaPromocao e passa a varíavel para o client.
        resp.redirect("promocoes/form");
    });
}