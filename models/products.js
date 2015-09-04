"use strict"

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
      references: {
        model: 'suppliers',
        key: 'SupplierID'
      }
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'CategoryID'
      }
    },
    QuantityPerUnit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UnitPrice: {
      type: DataTypes.REAL,
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
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return products;
};
