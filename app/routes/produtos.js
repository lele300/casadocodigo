//Módulo que carrega as rotas (sendo carregado pelo auto-load em express.js)
module.exports = (app) => {
    app.get("/produtos", (req, resp, next) => {
        const connection = app.infra.connectionFactory(); //Esse é o caminho que está o arquivo connectionFactory.js que retorna a function createDBConnection().
        // Usando new para atribuir um novo contexto de uso desse objeto e não pega o contexto do express-load
        const produtosDAO = new app.infra.ProdutosDAO(connection); //Esse é o caminho que está o arquivo produtosBanco.js que retorna O OBJETO já pronto para uso.
        produtosDAO.lista((erros, resultados) => {
            if(erros){
                return next(erros);
            }
            // .format() recebe um objeto com as configs para fazer o retorno da requisição de acordo com o Accept
            resp.format({
                html: () => { //Se o Accept for text/html, devolve o arquivo lista.ejs (HTML dinâmico)
                    resp.render("produtos/lista", { lista: resultados });
                },
                json: () => { //Se o Accept for application/json, devolve o resultados somente em JSON.
                    resp.json(resultados);
                }
            });
        });
        connection.end();
    });

    app.get("/produtos/form", (req, resp) => {
        resp.render("produtos/form", { erros: {}, produto: {} });
    });

    // Podemos usar a mesma URL para os serviços de produtos. O que os diferencia são os verbos HTTP utilizados
    app.post("/produtos", (req, resp, next) => {
        const produto = req.body; // Recuperando os dados do form graças ao body-parser. Retorna em JSON.
        req.assert("titulo", "Título é necessário").notEmpty();         // .assert(campo,mensagem) recebe o campo para validar e a mensagem associada.
        req.assert("preco", "Formato inválido").isFloat();
        const erros = req.validationErrors(); // Retorna os erros em uma lista de objetos
        if (erros) { // [] retorna true.
            resp.format({
                html: () => resp.status(400).render('produtos/form', { erros : erros, produto : produto })
                ,
                json: () => resp.status(400).json(erros)
            });
            return;
        }
        const connection = app.infra.connectionFactory(); //Instanciando objeto Connection do MySQL
        const produtosDAO = new app.infra.ProdutosDAO(connection); //Instanciando a classe ProdutosDAO, passando o objeto Connection para o módulo de ProdutosDAO.js
        produtosDAO.salva(produto, (erros, resultados) => {
            if(erros){
                return next(erros);
            }
            resp.redirect("/produtos");
        });
        connection.end();
    });
}