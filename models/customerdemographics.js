"use strict"

module.exports = function(sequelize, DataTypes) {
  var customerdemographics = sequelize.define('customerdemographics', { 
    id: {
      type: DataTypes.INTEGER,
      field: 'CustomerTypeID',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });
  return customerdemographics;
};
