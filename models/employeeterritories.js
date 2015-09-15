"use strict"


module.exports = function(sequelize, DataTypes) {
  var employeeterritories = sequelize.define('employeeterritories', { 
    EmployeeID: {
      type: DataTypes.INTEGER,
      field: 'EmployeeID',      
      allowNull: false,
      references: {
        model: 'employees',
        key: 'EmployeeID'
      }
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      field: 'TerritoryID',     
      allowNull: false,
      references: {
        model: 'territories',
        key: 'TerritoryID'
      }
      }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    classMethods: {
      associate: function (models) {
        employeeterritories.belongsTo(models.employees, {foreignKey: 'EmployeeID'})
      }
    }
  });
  return employeeterritories;
};
