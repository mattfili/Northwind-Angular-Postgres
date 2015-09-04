"use strict"
"use strict"
module.exports = function(sequelize, DataTypes) {
  var employeeterritories = sequelize.define('employeeterritories', { 
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
    },
    TerritoryID: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return employeeterritories;
};
