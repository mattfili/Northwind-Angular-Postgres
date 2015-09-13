"use strict"

module.exports = function(sequelize, DataTypes) {
  var order_details = sequelize.define('order_details', { 
    id: {
      type: DataTypes.INTEGER,
      field: 'OrderID',     
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    products_id: {
      type: DataTypes.INTEGER,
      field: 'ProductID',     
      allowNull: false,
      references: 'products',
      referencesKey: 'id'
    },
    UnitPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Discount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });
  return order_details;
};
