"use strict"


module.exports = function(sequelize, DataTypes) {
  var territories = sequelize.define('territories', { 
    id: {
      type: DataTypes.INTEGER,
      field: 'TerritoryID',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TerritoryDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    region_id: {
      type: DataTypes.INTEGER,
      field: 'RegionID',
      allowNull: false,
      references: 'region',
      referencesKey: 'id'
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });
  return territories;
};
