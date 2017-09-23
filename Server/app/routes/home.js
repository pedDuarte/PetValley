/*var dbConnection = require('dbConnection');

module.exports = function(app){
    app.get('/home', function(req, res){
        res.render('<body><h1>Adicionar alguma coisa</h1><br /><form action="/home/salvar" method="post"><label>Título</label><input type="text" id="titulo" name="titulo" placeholder="Título disto" /><br /><label>Alguma coisa</label><textarea id="something" name="algo" rows="5" cols="30"></textarea><br /><input type="submit" value="Enviar" /></form></body>');
    });

    app.post('/home/salvar', function(req,res){
        var dados = req.body;
        res.send(dados);
    });    
        
    app.get('/pets', function(req, res){
        var connection = dbConnection();
        connection.query("select * from pets", function(error, result){
            res.send(result);
            //res.render("path", {pets : result});
        })
    });
};*/