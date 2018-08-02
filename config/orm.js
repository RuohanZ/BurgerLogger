var connection = require("../config/connection.js");

var orm = {
    
    selectAll: function(table,callback){
        var queryString = "SELECT * FROM " + table+";";
        console.log(queryString);
        connection.query(queryString,function(err,data){
            if(err)throw err
            callback(data);
        });
    },

    insertOne: function(table,colNames,values,callback){
        var queryString = "INSERT INTO " + table 
                        +" ("+ colNames+") "
                        +"VALUES (?);";
        console.log(queryString);
        connection.query(queryString,values,function(err,data){
            if(err)throw err;
            callback(data);
        });
    },

    updateOne: function(table,newChange,condition,callback){
        var queryString = "UPDATE "+table
                        + " SET "+ newChange
                        + " WHERE "+ condition +" ;";
        console.log(queryString);
        connection.query(queryString,function(err,data){
            if(err)throw err;
            callback(data);
        })
    },

    deleteOne: function(table, condition, callback){
        var queryString = "DELETE FROM "+table
                        + " WHERE "+  condition +" ;";
        console.log(queryString);
        connection.query(queryString,function(err,data){
            if(err)throw err;
            callback(data);
        })
    }
}


module.exports = orm;