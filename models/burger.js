
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers",function(res){
            callback(res);
        })
    },

    insertOne: function(colNames,values,callback){
        orm.insertOne("burgers", colNames,values,function(res){
            callback(res);
        })
    },

    updateOne: function(newObj,condition,callback){
        orm.updateOne("burgers",newObj,condition,function(res){
            callback(res)
        })
    },

    deleteOne: function(condition,callback){
        orm.deleteOne("burgers",condition,function(res){
            callback(res)
        })
    }
};

module.exports = burger;