"use strict"

module.exports = function(sequelize, DataTypes) {
  var employees = sequelize.define('employees', { 
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      identifier: {type: DataTypes.INTEGER, primaryKey: true}
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
  });
return employees;
};
