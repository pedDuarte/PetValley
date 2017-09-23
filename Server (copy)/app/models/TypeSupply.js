var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var TypeSupply = {
    
        getAllTypeSupply : function(callback){
            return connection.query("SELECT * FROM Type_supply", callback);
        },
    
        getTypeSupplyById : function(id, callback){
            return connection.query("SELETC * FROM Type_supply WHERE Id = ?", [id], callback);
        },
    
        addTypeSupplyy : function(supply, callback){
            return connection.query("INSERT INTO Type_supply VALUES(?,?,?,?,?,?,?,?,?)",[],callback);
        },
    
        updateTypeSupply : function(id, supply, callback){
    
        },
    
        removeTypeSupply : function(id, callback){
            return connection.query("DELETE FROM Type_supply WHERE Id = ?", [id], callback);
        }
    
    };
    
    module.exports = TypeSupply;