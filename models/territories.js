"use strict"

module.exports = function(sequelize, DataTypes) {
  var territories = sequelize.define('territories', { 
    TerritoryID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TerritoryDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return territories;
};
