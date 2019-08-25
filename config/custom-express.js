/**
 * Folder Config tem as configurações do meu Express;
 * Express é o responsável por gerenciar toda nossa aplicação
 */

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();
    // inclui meu folder controllers no config, assim, quando meu index for utilizado para criar meu servidor, 
    // terá o conhecimento das rotas; 

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // com o app é possível navegar entre as as pastas para chamar algum arquivo
    consign()
     .include('controllers')
     .then('persistencia')
     .into(app);

    return app;
}
