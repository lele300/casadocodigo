class ProdutosDAO {
    constructor(connection) {
        this._connection = connection;
    }
    lista(callback) {
        this._connection.query('select * from livros', callback);
    }
    salva(produto, callback){
        // É possível utilizar o param "set ?" e concatenar com a estrutura desejada, porém 
        // deve conter os mesmo campos da tabela do BD.
        this._connection.query('insert into livros set ?', produto, callback);
    }
}

module.exports = () => {
    return ProdutosDAO;
};