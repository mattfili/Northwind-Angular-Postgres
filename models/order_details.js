"use strict"

module.exports = function(sequelize, DataTypes) {
  var order_details = sequelize.define('order_details', { 
    OrderID: {
      type: DataTypes.INTEGER,
      field: 'OrderID',     
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProductID: {
      type: DataTypes.INTEGER,
      field: 'ProductID',     
      allowNull: false,
      references: 'products',
      referencesKey: 'ProductID'
    },
    UnitPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    
    classMethods: {
      associate: function (models) {
        order_details
          .belongsTo(models.orders, {foreignKey: 'OrderID'})
          .hasOne(models.products, {foreignKey: 'ProductID'})
      }
    }
  });
  return order_details;
};
