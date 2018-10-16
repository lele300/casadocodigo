const mysql = require('mysql');
module.exports = () => {
    return createDBConnection;
}

// Colocamos em uma função a criação da conexão com o banco para que o auto-load não crie um objeto
// assim que for carregado. Assim, ele retorna a função que pode ser chamada á qualquer momento. 
function createDBConnection() {
    if(!process.env.NODE_ENV) { // Se nenhuma variável de ambiente estiver definida, ele supõe que está em dev
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'casadocodigo_nodejs_test'
        });
    }
}