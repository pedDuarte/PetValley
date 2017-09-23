var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Supply = {

    getAllSupply : function(callback){
        return connection.query("SELECT * FROM Supply", callback);
    },

    getSupplyById : function(id, callback){
        return connection.query("SELETC * FROM Supply WHERE Id = ?", [id], callback);
    },

    addSupply : function(supply, callback){
        return connection.query("INSERT INTO Supply VALUES(?,?,?,?,?,?,?,?,?)",[],callback);
    },

    updateSupply : function(id, supply, callback){

    },

    removeSupply : function(id, callback){
        return connection.query("DELETE FROM Supply WHERE Id = ?", [id], callback);
    }

};

module.exports = Supply;