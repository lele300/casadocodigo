module.exports = (app) => {
    // .get("url",callback) trata requisições que usam o method HTTP GET
    app.get("/produtos", function (res, resp) {
        // .render(url_arquivo_ejs) renderiza um arquivo de EJS no caminho produtos/lista
        // Obs: o EJS sempre busca os arquivos numa pasta default "views" na raiz do app
        resp.render("produtos/lista");
    });
}
