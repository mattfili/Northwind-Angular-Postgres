"use strict"

module.exports = function(sequelize, DataTypes) {
  var customercustomerdemo = sequelize.define('customercustomerdemo', { 
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'CustomerID'
    },
    CustomerTypeID: {
      type: DataTypes.INTEGER,
      field: 'CustomerTypeID',
      allowNull: false,
      references: {
        model: 'customerdemographics',
        referencesKey: 'CustomerTypeID'
      }
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false
  });
  return customercustomerdemo;
};
