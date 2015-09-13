"use strict"

module.exports = function(sequelize, DataTypes) {
  var customercustomerdemo = sequelize.define('customercustomerdemo', { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'CustomerID'
    },
    customerdemographics_id: {
      type: DataTypes.INTEGER,
      field: 'CustomerTypeID',
      allowNull: false,
      references: 'customerdemographics',
      referencesKey: 'id'
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });
  return customercustomerdemo;
};
