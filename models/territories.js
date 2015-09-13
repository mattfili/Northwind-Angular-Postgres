"use strict"


module.exports = function(sequelize, DataTypes) {
  var territories = sequelize.define('territories', { 
    TerritoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    TerritoryDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'region',
      referencesKey: 'RegionID'
    }
  });
  return territories;
};
