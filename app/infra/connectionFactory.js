const mysql = require('mysql');
module.exports = () => {
    return createDBConnection;
}

// Colocamos em uma função a criação da conexão com o banco para que o auto-load não crie um objeto
// assim que for carregado. Assim, ele retorna uma função que pode ser chamada á qualquer momento. 
function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}