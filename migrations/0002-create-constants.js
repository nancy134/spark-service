'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Constants', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            savedSearchId: {
                type: Sequelize.STRING
            },
            constantId: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Constants');
    }
};
