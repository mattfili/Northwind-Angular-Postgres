"use strict"

module.exports = function(sequelize, DataTypes) {
  var categories = sequelize.define('categories', { 
    CategoryID: {
      type: DataTypes.INTEGER,
      field: 'CategoryID',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
  }, {

    classMethods: {
      associate: function (models) {
        categories
          .belongsTo(models.products, {foreignKey: 'CategoryID'})
      }
    }
  });

  return categories;
};
