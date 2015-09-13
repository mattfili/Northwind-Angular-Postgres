"use strict"
var Model = require(__dirname)


module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', { 
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: 'suppliers',
      referencesKey: 'SupplierID'
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: 'categories',
      referencesKey:'CategoryID'
    },
    QuantityPerUnit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UnitPrice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnitsInStock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnitsOnOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReorderLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Discontinued: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return products;
};
