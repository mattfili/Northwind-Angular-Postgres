"use strict"
module.exports = function(sequelize, DataTypes) {
  var employeeterritories = sequelize.define('employeeterritories', { 
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'EmployeesID'
      }
    TerritoryID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'territories',
        key: 'TerritoryID'
      }
    }
  });
  return employeeterritories;
};
