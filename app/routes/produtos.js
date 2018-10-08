module.exports = (app) => {
    app.get("/produtos", (req, resp) => {
        const connection = app.infra.connectionFactory();
        connection.query('select * from livros', (err, results) => {
            resp.render("produtos/lista", {lista: results});
        });
        connection.end();
    });
}
