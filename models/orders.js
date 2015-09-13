"use strict"

module.exports = function(sequelize, DataTypes) {
  var orders = sequelize.define('orders', { 
    OrderID: {
      type: DataTypes.INTEGER,
      field: 'OrderID',     
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      field: 'CustomerID',     
      allowNull: true,
      references: 'customers',
      referencesKey:'id'
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      field: 'EmployeeID',     
      allowNull: true,
      references: 'employees',
      referencesKey: 'EmployeeID'
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RequiredDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShippedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipVia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: 'shippers',
      referencesKey: 'ShipperID'
    },
    Freight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShipName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipRegion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipPostalCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShipCountry: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true,    
    classMethods: {
      associate: function (models) {
        orders
          .hasMany(models.order_details, {foreignKey: 'OrderID'})
          .hasOne(models.shippers, {foreignKey: 'ShipVia'})
          .hasOne(models.customers, {foreignKey: 'CustomerID'})
          .hasOne(models.employees, {foreignKey: 'EmployeeID', as: 'Salesperson'} )
      }
    }
  });
return orders;
};
