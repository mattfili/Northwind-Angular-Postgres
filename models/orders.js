"use strict"

module.exports = function(sequelize, DataTypes) {
  var orders = sequelize.define('orders', { 
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'CustomerID'
      }
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'EmployeeID'
      }
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
      allowNull: true
    },
    Freight: {
      type: DataTypes.REAL,
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
  });
return orders;
};
