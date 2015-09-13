"use strict"


module.exports = function(sequelize, DataTypes) {
  var territories = sequelize.define('territories', { 
    TerritoryID: {
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
    RegionID: {
      type: DataTypes.INTEGER,
      field: 'RegionID',
      allowNull: false,
      references: 'region',
      referencesKey: 'RegionID'
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true,
    classMethods: {
      associate: function (models) {
        territories
          .hasMany(models.employeeterritories, {foreignKey: 'TerritoryID'})
          .hasOne(models.region, {foreignKey: 'RegionID'})
      }
    }
  });
  return territories;
};
