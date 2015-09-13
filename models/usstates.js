"use strict"
var Model = require(__dirname)

module.exports = function(sequelize, DataTypes) {
  var usstates = sequelize.define('usstates', { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StateName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StateAbbr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StateRegion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });
  return usstates;
};
