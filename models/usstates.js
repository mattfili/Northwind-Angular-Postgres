"use strict"
var Model = require(__dirname)

module.exports = function(sequelize, DataTypes) {
  var usstates = sequelize.define('usstates', { 
    StateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
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
  });
  return usstates;
};
