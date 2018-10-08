// e vai retornar a função do module.exports. Após o caminho do require, já invocamos
// a função retornada de module.exports
const app = require('./config/express')();

app.listen(3000, () => {
    console.log('Servidor rodando...');
});
