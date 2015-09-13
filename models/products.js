"use strict"


module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', { 
    ProductID: {
      type: DataTypes.INTEGER,
      field: 'ProductID',     
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      field: 'SupplierID',     
      allowNull: true,
      references: 'suppliers',
      referencesKey: 'SupplierID'
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      field: 'CategoryID',     
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
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true,
    classMethods: {
      associate: function (models) {
        products
          .hasOne(models.categories, {foreignKey: 'CategoryID'})
          .hasOne(models.suppliers, {foreignKey: 'SupplierID'})
      }
    }
  });
  return products;
};
