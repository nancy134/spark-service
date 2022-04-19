'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        Amount: DataTypes.DECIMAL(6, 2),
        ApplicationName: DataTypes.STRING,
        ApplicationUri: DataTypes.STRING,
        CallbackName: DataTypes.STRING,
        EventType: DataTypes.STRING,
        PricingPlan: DataTypes.STRING,
        PurchaseOrderNumber: DataTypes.STRING,
        Review: DataTypes.STRING,
        StarRating: DataTypes.STRING,
        Summary: DataTypes.STRING,
        TestOnly: DataTypes.STRING,
        Timestamp: DataTypes.DATE,
        TransactionId: DataTypes.STRING,
        UserEmail: DataTypes.STRING,
        UserId: DataTypes.STRING,
        UserName: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,

    }, {});

    return Event;
}
