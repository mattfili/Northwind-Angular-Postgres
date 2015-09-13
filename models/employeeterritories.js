"use strict"


module.exports = function(sequelize, DataTypes) {
  var employeeterritories = sequelize.define('employeeterritories', { 
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'employees',
      referencesKey: 'EmployeesID'
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'territories',
      referencesKey: 'TerritoryID'
      }
  });
  return employeeterritories;
};
