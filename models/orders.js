"use strict"

module.exports = function(sequelize, DataTypes) {
  var orders = sequelize.define('orders', { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customers_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: 'customers',
      referencesKey:'id'
    },
    employees_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: 'employees',
      referencesKey: 'id'
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
    underscored: true
  });
return orders;
};
