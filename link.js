const models = require("./models");
const utilities = require('./utilities');

exports.create = function(body, t){
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

exports.getAll = function(){
    return new Promise(function(resolve, reject){
        models.Link.findAndCountAll({
        }).then(function(links){
            resolve(links);
        }).catch(function(err){
            reject(err);
        });
    }).catch(function(err){
        reject(err);
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


exports.update = function(id, body){
    return new Promise(function(resolve, reject){
        models.Link.update(
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
        //models.Code.destroy({
        models.Link.destroy({
    
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