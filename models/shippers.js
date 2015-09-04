"use strict"

module.exports = function(sequelize, DataTypes) {
  var shippers = sequelize.define('shippers', { 
    ShipperID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return shippers;
};
