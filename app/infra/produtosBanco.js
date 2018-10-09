module.exports = () => {
    this.lista = (connection, callback) =>{
        connection.query("SELECT * FROM livros", callback);
    }
    return this;
}