'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Events', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Amount: {
                type: Sequelize.DECIMAL(6,2)
            },
            ApplicationName: {
                type: Sequelize.STRING
            },
            ApplicationUri: {
                type: Sequelize.STRING
            },
            CallbackName: {
                type: Sequelize.STRING
            },
            EventType: {
                type: Sequelize.STRING
            },
            PricingPlan: {
                type: Sequelize.STRING
            },
            PurchaseOrderNumber: {
                type: Sequelize.STRING
            },
            Review: {
                type: Sequelize.STRING
            },
            StarRating: {
                type: Sequelize.STRING
            },
            Summary: {
                type: Sequelize.STRING
            },
            TestOnly: {
                type: Sequelize.STRING
            },
            Timestamp: {
                type: Sequelize.DATE
            },
            TransactionId: {
                type: Sequelize.STRING
            },
            UserEmail: {
                type: Sequelize.STRING
            },
            UserId: {
                type: Sequelize.STRING
            },
            UserName: {
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
        return queryInterface.dropTable('Events');
    }
};
