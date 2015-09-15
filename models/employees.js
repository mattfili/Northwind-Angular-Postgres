"use strict"

module.exports = function(sequelize, DataTypes) {
  var employees = sequelize.define('employees', { 
    EmployeeID: {
      type: DataTypes.INTEGER,
      field: 'EmployeeID',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TitleOfCourtesy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HireDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostalCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HomePhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Extension: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Photo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReportsTo: {  
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PhotoPath: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    syncOnAssociation: false,
    classMethods: {
      associate: function (models) {
        employees.hasMany(models.orders, {foreignKey: 'EmployeeID'})
        employees.hasMany(models.employeeterritories, {foreignKey: 'EmployeeID'})
        employees.hasOne(models.employees, {foreignKey: 'ReportsTo'})
      }
    }
  });
return employees;
};
