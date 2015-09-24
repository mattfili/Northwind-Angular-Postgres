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


exports.mergeObjects = function (data) {



	var keys = ['EmployeeID', 'ShipName', 'OrderDate', 'CustomerID', 'Quantity', 'UnitPrice', 'Discount', 'ShipCountry'] // CONVERT TO TEMPLATE TABLE

	// PICK THE PROPERTY NAME YOU GAVE IT AND ASSIGN IT TO A NEW OBJECT
	var flattenedJSON = _.map(data, function (product) {
	  var obj = _.pick(product, 'ProductName'); // ASSIGN DYNAMIC 1:M STRING

	// OMIT THE NESTED DATA AND ASSIGN IT 
	  var flattenedOrders = _.map(product.orders, function (order) {
	    return _(order).omit('order_details').assign(order.order_details).value();  // ASSIGN DYNAMIC NESTED OBJ
	  });

	  _.forEach(keys, function (prop) {
	    obj[prop] = _.pluck(flattenedOrders , prop);
	  });

	  return obj
	});

	return flattenedJSON

}