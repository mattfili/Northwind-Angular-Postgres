"use strict"

module.exports = function(sequelize, DataTypes) {
  var shippers = sequelize.define('shippers', { 
    ShipperID: {
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
    underscored: true,
    classMethods: {
      associate: function (models) {
        shippers
          .hasMany(models.orders, {foreignKey: 'ShipVia'})
      }
    }
  });

  return shippers;
};
