const models = require("./models");
const utilities = require('./utilities');

exports.create = function(body, t){
    return new Promise(function(resolve, reject){
        models.Event.create(
            body,
            { transaction: t}
        ).then(function(result){
            resolve(result);
        }).catch(function(err){
            reject(err);
       });
    });
}

exports.getAll = function(){
    return new Promise(function(resolve, reject){
        models.Event.findAndCountAll({
        }).then(function(results){
            resolve(results);
        }).catch(function(err){
            reject(err);
        });
    }).catch(function(err){
        reject(err);
    });
}

exports.get = function(id){
    return new Promise(function(resolve, reject){
        models.Event.findOne({
            where: {
                id: id
            }
        }).then(function(result){
            resolve(result);
        }).catch(function(err){
            reject(err);
        });
    }).catch(function(err){
        reject(err);
    });
}

exports.find = function(listingKey){
    return new Promise(function(resolve, reject){
        models.Event.findOne({
            where: {
                listingKey: listingKey
            }
        }).then(function(result){
            resolve(result);
        }).catch(function(err){
            reject(err);
        });
    }).catch(function(err){
        reject(err);
    });
}


exports.update = function(id, body){
    return new Promise(function(resolve, reject){
        models.Event.update(
            body,
            {
                returning: true,
                where: {id: id}
            }
        ).then(function(update){
            if (!update[0]){
                reject({message: "No records updated"});
            } else {
                resolve(update[1][0]);
            }
        }).catch(function(err){
            reject(err);
        });
    });
}

exports.deleteLink = function(id, t){
    return new Promise(function(resolve, reject){
        models.Event.destroy({
    
            where: {
                id: id,
            },
            transaction: t
        }).then(function(result){
            resolve(result);
        }).catch(function(err){
            reject(err);
        });
    });
}
