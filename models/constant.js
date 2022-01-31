'use strict';
module.exports = (sequelize, DataTypes) => {
    const Constant = sequelize.define('Constant', {
        savedSearchId: DataTypes.STRING,
        constantId: DataTypes.STRING,
        ccAccountId: DataTypes.STRING
    }, {});

    return Constant;
}
