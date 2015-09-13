"use strict"

module.exports = function(sequelize, DataTypes) {
  var shippers = sequelize.define('shippers', { 
    id: {
      type: DataTypes.INTEGER,
      field: 'ShipperID',     
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });

  return shippers;
};
