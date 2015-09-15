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
      references: {
        model: 'suppliers',
        key: 'SupplierID'
      }
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      field: 'CategoryID',     
      allowNull: true,
      references: {
        model: 'categories',
        key:'CategoryID'
      }
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
    classMethods: {
      associate: function (models) {
        products.belongsTo(models.categories, {foreignKey: 'CategoryID'})
        products.belongsTo(models.suppliers, {foreignKey: 'SupplierID'})
        products.belongsToMany(models.orders, {through: models.order_details, foreignKey: 'ProductID'})
      }
    }
  });
  return products;
};
