"use strict"

module.exports = function(sequelize, DataTypes) {
  var region = sequelize.define('region', { 
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    RegionDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return region;
};
