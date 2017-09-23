var user = require('./../models/User');

module.exports = function(app){

    app.get('/users', function(req, res){
        user.getAllUsers(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/user/:id', function(req,res){

        user.getUserById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });    
    
    app.get('/login/:email', function(req,res){
        
        user.getLoginParams(req.params.email, function(error, result){
                if(error)return res.status(400).json(error);
                return res.status(200).json(result);
                })
            }); 

    /*app.post('/login', function(req,res){
        var result;

        user.getLoginParams(req.body.email, function(error, result){
            if(error)
                result = res.status(400).json(error);
            else
                result = res.status(200).json(result);
            return result;
        })

        /*if(result.password == req.body.password){
            //return deu bom
        }
        else{
            //return deu ruim
        }
        
    });   */
    
}