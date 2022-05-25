const models = require('./models');
const utilities = require('./utilities');

exports.create = function(body, t){
    return new Promise(function(resolve, reject){
        models.Constant.create(
            body,
            { transaction: t}
        ).then(function(constant){
            resolve(constant);
        }).catch(function(err){
            reject(err);
       });
    });
}

exports.getAll = function(){
    return new Promise(function(resolve, reject){
        models.Constant.findAndCountAll({
        }).then(function(constants){
            resolve(constants);
        }).catch(function(err){
            reject(err);
        });
    });
}

exports.get = function(id){
    return new Promise(function(resolve, reject){
        models.Constant.findOne({
            where: {
                id: id
            }
        }).then(function(constant){
            resolve(constant);
        }).catch(function(err){
            reject(err);
        });
    });
}

exports.find = function(savedSearchId, ccAccountId){
    return new Promise(function(resolve, reject){
        models.Constant.findAll({
            where: {
                savedSearchId: savedSearchId
            },
            order: [['createdAt', 'DESC']]
        }).then(function(constant){
            resolve(constant);
        }).catch(function(err){
            reject(err);
        });
    });
}

exports.update = function(id, body){
    return new Promise(function(resolve, reject){
        models.Constant.update(
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

exports.deleteConstant = function(id, t){
    return new Promise(function(resolve, reject){
        models.Constant.destroy({
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

