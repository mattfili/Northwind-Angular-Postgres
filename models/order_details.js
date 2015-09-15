"use strict"

module.exports = function(sequelize, DataTypes) {
  var order_details = sequelize.define('order_details', { 
    OrderID: {
      type: DataTypes.INTEGER,
      field: 'OrderID',     
      allowNull: false,
      references: {
        model: 'orders',
        key: 'OrderID'
      }
    },
    ProductID: {
      type: DataTypes.INTEGER,
      field: 'ProductID',     
      allowNull: false,
      references: {
        model: 'products',
        key: 'ProductID'
      }
    },
    UnitPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'UnitPrice'
      }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Discount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
  });
  return order_details;
};
