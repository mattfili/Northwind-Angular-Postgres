"use strict"

module.exports = function(sequelize, DataTypes) {
  var customerdemographics = sequelize.define('customerdemographics', { 
    CustomerTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    CustomerDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  return customerdemographics;
};
