"use strict"

module.exports = function(sequelize, DataTypes) {
  var region = sequelize.define('region', { 
    id: {
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
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });
  return region;
};
