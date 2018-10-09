module.exports = () => {
    return function(connection) {
        this.lista = (callback) => {
            connection.query("SELECT * FROM livros", callback);
        }
        return this; // É utilizado esse this objeto inteiro fique visível para quem carregar uma instância dele.
    };
}