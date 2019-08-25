/**
 *  Arquvo responsável por criar as conexões com o banco.
 */

var mysql = require('mysql');

// criando uma função que cria a conexão com o banco de dados
function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'payfast'
    });
}

module.exports = function(){
    return createDBConnection;
}