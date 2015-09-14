"use strict"


module.exports = function(sequelize, DataTypes) {
  var employeeterritories = sequelize.define('employeeterritories', { 
    EmployeeID: {
      type: DataTypes.INTEGER,
      field: 'EmployeeID',      
      allowNull: false,
      references: 'employees',
      referencesKey: 'EmployeeID'
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      field: 'TerritoryID',     
      allowNull: false,
      references: 'territories',
      referencesKey: 'TerritoryID'
      }
  }, {

    classMethods: {
      associate: function (models) {
        employeeterritories
          .belongsTo(models.employees, {foreignKey: 'EmployeeID'})
      }
    }
  });
  return employeeterritories;
};
