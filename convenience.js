var _ = require('lodash');
var Model = require('./models')

exports.mapping = function(data, cb) {
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
      orders: [],
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
	

	var keyMap = _.keys(table[0]) // array of template object keys



	for (var i in data) {
		var newDefault = _.pick(data[i].dataValues, keyMap)

		for (var j =0; j< data.length; j++) {
			_.assign(table[j], newDefault)
		}
		
		newDefault = null;
	}

	var res = _(table)

	console.log(res)

	// table.forEach(function(val, k) {
	// 	var ordersArray = table[k]

	// 	for (var j in ordersArray) {
	// 		var ordersVal = ordersArray[j]
	// 		// console.log(ordersVal)

	// 		for (var m in ordersVal) {
	// 			var orderMerge = _.pick(ordersVal[m].dataValues, keyMap)

	// 			// console.log(orderMerge)
	// 			// ._merge(table.orders, orderMerge)
	// 		}
	// 	}
	// })

	// console.log(table[1].orders)

	// console.log(table[1].orders[0])
		// console.log(table[1].orders[0].dataValues)


	cb(table)
}

