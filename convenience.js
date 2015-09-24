var _ = require('lodash');
var Model = require('./models')


exports.toPOJO = function(instance) {
  if (_.has(instance, 'dataValues')) {
    instance = instance.dataValues;
  }

  return _.cloneDeep(instance, function (value) {
    return _.has(value, 'dataValues') ? value.dataValues : undefined;
  });
}


exports.mergeDuplicates = function (data, cb) {


	var table = [{
	  ProductID: {},
      ProductName: {},
      SupplierID: {},
      CategoryID: {},
      QuantityPerUnit: {},
      UnitPrice: {},
      UnitsInStock: {},
      UnitsOnOrder: {},
      ReorderLevel: {},
      Discontinued: {},
      OrderID: [],
      CustomerID:[],
      EmployeeID:[],
      OrderDate:[],
      RequiredDate:[],
      ShippedDate:[],
      ShipVia:[],
      Freight:[],
      ShipName:[],
      ShipAddress:[],
      ShipCity:[],
      ShipRegion:[],
      ShipPostalCode:[],
      ShipCountry:[],
      OrderID:[],
	  ProductID:[],
	  UnitPrice:[],
	  Quantity:[],
	  Discount:[],
	  order_details:[],
	}]

	var tableProps = _.keys(table[0])
	var firstOrder = ''

	data.forEach(function(elem, i) {

		//CONVERT THE FIRST ORDER TO AN ARRAY FOR THE REST TO PUSH TO
		var firstOrder = data[i].orders

		var objectKeys = _.keys(firstOrder)

		for (key in firstOrder) {

			_.each(tableProps, function (stuff, j) {
				if (tableProps[i] === objectKeys[i]) {
					table[i].objectKeys[i].push(firstOrder[key])
				}


			})

			console.log(table)

		}

	})

	// console.log(data[0].orders[0])

	// console.log(firstOrder)


	cb(data)


}