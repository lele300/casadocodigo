// require vai executar o script do arquivo que está no caminho './config/express'
// e vai retornar a função do module.exports. Após o caminho do require, já invocamos
// a função retornada de module.exports
const app = require('./config/express')();

const rotasDosProdutos = require("./app/routes/produtos")(app);

// listen(porta, fn callback)
app.listen(3000, function(){
    console.log('Servidor rodando...');
});
