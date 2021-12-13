'use strict';
module.exports = (sequelize, DataTypes) => {
    const Link = sequelize.define('Link', {
        listingKey: DataTypes.STRING,
        link: DataTypes.STRING,
        expiresAt: DataTypes.DATE
    }, {});

    return Link;
}