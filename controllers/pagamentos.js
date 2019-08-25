/**
 * arquivo responsável por obter as rotas do projeto
 */

module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        res.send('A rota foi criada corretamente')
    });

    app.post('/pagamentos/pagamento', function(req, res){
        var pagamento = req.body;
        console.log('processando uma requisição de um novo pagamento!');

        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        // Pedindo uma conexão ao banco, e abaixo instancio um novo objeto de PagamentoDao para invocar o método salva.
        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(erro, resultado) {
            console.log('Pagamento criado');
            res.json(pagamento);
        });

    });
    
}
