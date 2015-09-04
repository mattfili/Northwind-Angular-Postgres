"use strict"

module.exports = function(sequelize, DataTypes) {
  var customercustomerdemo = sequelize.define('customercustomerdemo', { 
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    CustomerTypeID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'customerdemographics',
        key: 'CustomerTypeID'
      }
    }
  });
  return customercustomerdemo;
};
