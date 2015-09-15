"use strict"

module.exports = function(sequelize, DataTypes) {
  var region = sequelize.define('region', { 
    RegionID: {
      type: DataTypes.INTEGER,
      field: 'RegionID',     
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RegionDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {

    classMethods: {
      associate: function (models) {
        region.belongsTo(models.territories, {foreignKey: 'RegionID'})
      }
    }
  });
  return region;
};
