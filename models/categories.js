"use strict"

module.exports = function(sequelize, DataTypes) {
  var categories = sequelize.define('categories', { 
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Picture: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  });

  return categories;
};
