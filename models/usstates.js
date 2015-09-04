"use strict"

module.exports = function(sequelize, DataTypes) {
  var usstates = sequelize.define('usstates', { 
    StateID: {
      type: DataTypes.INTEGER,
      allowNull: false
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
