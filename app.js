// e vai retornar a função do module.exports. Após o caminho do require, já invocamos
// a função retornada de module.exports
const app = require('./config/express')();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// Criando o nome "io" e o valor dela é o objeto do WebSocket.
app.set('io',io);

const porta = process.env.PORT || 3000;

http.listen(porta, () => {
    console.log('Servidor rodando no heroku...');
});
