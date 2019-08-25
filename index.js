/**
 * No meu index crio o meu servidor, utilizando o express, ou a variável que o possui;
 * Aqui chamamos o app;
 */

var app = require('./config/custom-express') ();

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000')
});