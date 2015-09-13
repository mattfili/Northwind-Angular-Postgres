"use strict"
var Model = require(__dirname)


module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    suppliers_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: 'suppliers',
      referencesKey: 'id'
    },
    categories_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: 'categories',
      referencesKey:'id'
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
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true,
    classMethods: {
      associate: function (models) {
        products
          .hasOne(models.categories)
          .hasOne(models.suppliers)
      }
    }
  });
  return products;
};
