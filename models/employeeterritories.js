"use strict"


module.exports = function(sequelize, DataTypes) {
  var employeeterritories = sequelize.define('employeeterritories', { 
    employees_id: {
      type: DataTypes.INTEGER,
      field: 'EmployeeID',      
      allowNull: false,
      references: 'employees',
      referencesKey: 'id'
    },
    territories_id: {
      type: DataTypes.INTEGER,
      field: 'TerritoryID',     
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
