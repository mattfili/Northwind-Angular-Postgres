"use strict"

module.exports = function(sequelize, DataTypes) {
  var suppliers = sequelize.define('suppliers', { 
    SupplierID: {
      type: DataTypes.INTEGER,
      field: 'SupplierID',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ContactName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ContactTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostalCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HomePage: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {

    classMethods: {
      associate: function (models) {
        suppliers.hasMany(models.products, {foreignKey: 'SupplierID'})
      }
    }
  });
  return suppliers;
};
