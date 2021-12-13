const models = require("./models");
const utilities = require('./utilities');

exports.create = function(authParams, body, t){
    return new Promise(function(resolve, reject){
        models.Link.create(
            body,
            { transaction: t}
        ).then(function(link){
            resolve(link);
        }).catch(function(err){
            reject(err);
       });
    });
}

exports.get = function(id){
    return new Promise(function(resolve, reject){
        models.Link.findOne({
            where: {
                id: id
            }
        }).then(function(link){
            resolve(link);
        }).catch(function(err){
            reject(err);
        });
    }).catch(function(err){
        reject(err);
    });
}

exports.find = function(listingKey){
    return new Promise(function(resolve, reject){
        models.Link.findOne({
            where: {
                listingKey: listingKey
            }
        }).then(function(link){
            resolve(link);
        }).catch(function(err){
            reject(err);
        });
    }).catch(function(err){
        reject(err);
    });
}