"use strict"

module.exports = function(sequelize, DataTypes) {
  var order_details = sequelize.define('order_details', { 
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'ProductID'
      }
    },
    UnitPrice: {
      type: DataTypes.REAL,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Discount: {
      type: DataTypes.REAL,
      allowNull: false
    }
  });
  return order_details;
};
