"use strict"


module.exports = function(sequelize, DataTypes) {
  var employeeterritories = sequelize.define('employeeterritories', { 
    employees_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'employees',
      referencesKey: 'id'
    },
    territories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'territories',
      referencesKey: 'id'
      }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    underscored: true
  });
  return employeeterritories;
};
