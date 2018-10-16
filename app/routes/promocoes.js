module.exports = app => {
    app.get("/promocoes/form", (req, resp, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista((erros, resultados) => {
            if(erros){
                return next(erros);
            }
            resp.render("promocoes/form", {lista : resultados});
        });
    });

    app.post("/promocoes", (req, resp) => {
        let produto = req.body;
        resp.redirect("promocoes/form");
    });
}